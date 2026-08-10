import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  CATEGORIES,
  CATEGORY_BY_ID,
  QUESTIONS,
  type CategoryId,
  type Question,
} from './data/questions';

/** A deck is either one category or the whole library. */
type DeckId = CategoryId | 'all';

const ALL_DECK = 'all' as const;

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export default function App() {
  const [deck, setDeck] = useState<DeckId>(ALL_DECK);
  /** Question ids already drawn from each deck this session. */
  const [seen, setSeen] = useState<Record<string, string[]>>({});
  /** The question currently on screen for each deck, so switching decks keeps context. */
  const [current, setCurrent] = useState<Record<string, Question>>({});
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | undefined>(undefined);

  const pool = useMemo(
    () => (deck === ALL_DECK ? QUESTIONS : QUESTIONS.filter((q) => q.category === deck)),
    [deck],
  );

  const currentQuestion = current[deck];
  const seenCount = seen[deck]?.length ?? 0;

  const draw = useCallback(() => {
    const alreadySeen = seen[deck] ?? [];
    let remaining = pool.filter((q) => !alreadySeen.includes(q.id));
    let nextSeen = alreadySeen;

    // Deck exhausted: reshuffle, but never repeat the question still on screen.
    if (remaining.length === 0) {
      nextSeen = [];
      const onScreen = current[deck];
      remaining = pool.filter((q) => q.id !== onScreen?.id);
      if (remaining.length === 0) remaining = pool;
    }

    const next = pickRandom(remaining);
    setSeen({ ...seen, [deck]: [...nextSeen, next.id] });
    setCurrent({ ...current, [deck]: next });
    setCopied(false);
  }, [current, deck, pool, seen]);

  const resetSession = useCallback(() => {
    setSeen({});
    setCurrent({});
    setCopied(false);
  }, []);

  const copyQuestion = useCallback(async () => {
    if (!currentQuestion) return;
    try {
      await navigator.clipboard.writeText(currentQuestion.text);
      setCopied(true);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked (insecure context, permissions).
      // Fall back to selecting the text so the user can copy it manually.
      const node = document.getElementById('current-question');
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  }, [currentQuestion]);

  // Keyboard shortcuts for running the app live during a call.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === 'n' || event.key === 'N') {
        event.preventDefault();
        draw();
      } else if ((event.key === 'c' || event.key === 'C') && currentQuestion) {
        event.preventDefault();
        void copyQuestion();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [copyQuestion, currentQuestion, draw]);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const deckLabel = deck === ALL_DECK ? 'All categories' : CATEGORY_BY_ID[deck].label;
  const deckPurpose =
    deck === ALL_DECK
      ? 'A mix of every theme — good for a conversation that could go anywhere.'
      : CATEGORY_BY_ID[deck].purpose;
  const hint =
    currentQuestion !== undefined
      ? CATEGORY_BY_ID[currentQuestion.category].hint
      : undefined;

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">1:1 Question Bank</h1>
        <p className="tagline">
          Pick a theme, draw a question, and let the conversation be a conversation.
        </p>
      </header>

      <nav className="categories" aria-label="Question categories">
        <button
          type="button"
          className={`pill${deck === ALL_DECK ? ' pill--active' : ''}`}
          aria-pressed={deck === ALL_DECK}
          onClick={() => setDeck(ALL_DECK)}
        >
          All categories
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`pill${deck === category.id ? ' pill--active' : ''}`}
            aria-pressed={deck === category.id}
            onClick={() => setDeck(category.id)}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <main className="stage">
        <p className="deck-purpose">{deckPurpose}</p>

        <section className="card" aria-labelledby="deck-label">
          <p className="card__category" id="deck-label">
            {currentQuestion && deck === ALL_DECK
              ? CATEGORY_BY_ID[currentQuestion.category].label
              : deckLabel}
          </p>

          <div className="card__body" aria-live="polite">
            {currentQuestion ? (
              <p className="question" id="current-question" key={currentQuestion.id}>
                {currentQuestion.text}
              </p>
            ) : (
              <p className="question question--empty">
                Ready when you are — draw a question to get started.
              </p>
            )}
          </div>

          {hint && <p className="card__hint">{hint}</p>}
        </section>

        <div className="actions">
          <button type="button" className="btn btn--primary" onClick={draw}>
            {currentQuestion ? 'Another question' : 'Give me a question'}
          </button>
          <button
            type="button"
            className="btn"
            onClick={copyQuestion}
            disabled={!currentQuestion}
          >
            {copied ? 'Copied' : 'Copy question'}
          </button>
        </div>

        <p className="meta">
          {seenCount > 0
            ? `${seenCount} of ${pool.length} asked in ${deckLabel.toLowerCase()} this session`
            : `${pool.length} questions in ${deckLabel.toLowerCase()}`}
        </p>
      </main>

      <footer className="footer">
        <button type="button" className="link-btn" onClick={resetSession}>
          Reset session
        </button>
        <span className="footer__sep" aria-hidden="true">
          ·
        </span>
        <span className="footer__keys">
          Press <kbd>N</kbd> for the next question, <kbd>C</kbd> to copy
        </span>
      </footer>
    </div>
  );
}
