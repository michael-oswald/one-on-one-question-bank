# 1:1 Question Generator Web App – Product Requirements Document

## Overview

The 1:1 Question Generator is a lightweight web application that helps managers and employees run more thoughtful, less awkward one-on-one meetings by surfacing high-quality, conversation-driving questions on demand.[web:1][web:3][web:9] The app focuses on a few core dimensions recommended by modern leadership and HR guidance: connection, current work, growth, feedback, wellbeing, and clear action items.[web:3][web:7][web:15]

During a 1:1, either party can share their screen, select a category (e.g., Icebreaker, Status, Goals, Feedback), and click a button to get a random, thought-provoking question designed to keep the conversation productive and human-centered.[web:1][web:3]

---

## Goals and Non-Goals

### Goals

- Make it easy to start and sustain a meaningful one-on-one conversation with minimal prep, using questions aligned with best-practice 1:1 themes (connection, work blockers, feedback, growth, wellbeing, and alignment).[web:3][web:7][web:15]
- Provide a simple, frictionless UI for screen-shared 1:1s: select category → generate question → optionally copy or regenerate.[web:1][web:3]
- Ship as a static web app (React + static hosting) that is fast, accessible, and deployable to GitHub Pages with no backend dependencies.[web:15]

### Non-Goals (v1)

- No authentication, personalization, or storage of user data beyond ephemeral in-browser state.
- No AI-generated questions in v1; the library is a curated, static set of questions designed from research on effective 1:1 practices.[web:1][web:3][web:9]
- No calendar integration, meeting notes storage, or full 1:1 agenda management; the app is a focused "question generator," not a comprehensive 1:1 platform.[web:15]

---

## Target Users and Context

### Primary Users

- **People managers** running recurring 1:1s with direct reports, seeking better prompts for connection, performance, growth, and feedback.[web:9][web:10]
- **Individual contributors (direct reports)** who want to drive the conversation proactively by asking better questions of their manager.[web:14]

### Typical Usage Context

- Weekly, bi-weekly, or monthly 1:1s conducted over video (screen sharing) or in person with a laptop or tablet.
- Performance and growth conversations (mid-year reviews, career check-ins) where both parties want a structured yet human conversation instead of a pure status update.[web:3][web:14]

---

## High-Level Concept and Positioning

Modern 1:1 guides emphasize that the most impactful meetings cover four to six recurring areas: check-in and rapport, current work and blockers, growth and career, feedback in both directions, wellbeing, and clear next steps.[web:3][web:7][web:9][web:15] This app operationalizes those themes into clear categories and high-quality prompts that can be "pulled out of a hat" live during the meeting, avoiding the common failure mode of 1:1s becoming status updates or awkward small talk.[web:1][web:3][web:9]

---

## Core Question Categories

The following categories are derived from recurring patterns across multiple 1:1 question lists from leadership, HR, and remote-work sources.[web:1][web:3][web:5][web:7][web:9][web:10][web:14][web:15]

1. **Icebreaker & Rapport**  
   Purpose: Build personal connection, break the ice, and ease into the conversation.[web:2][web:3][web:9]

2. **Check-in & Wellbeing**  
   Purpose: Understand how the person is really doing, including workload and stress.[web:3][web:5][web:6][web:12]

3. **Current Work & Status**  
   Purpose: Explore priorities, progress, and where time is actually going, beyond a ticket list.[web:1][web:3][web:5][web:8][web:10][web:13][web:15]

4. **Wins & Challenges ("What’s Going Well / Not Well")**  
   Purpose: Surface both recent wins to celebrate and friction points that need attention.[web:1][web:3][web:4][web:5][web:6]

5. **Goals & Career Development**  
   Purpose: Keep career growth and long-term goals on the agenda instead of only short-term tasks.[web:3][web:4][web:6][web:7][web:9][web:10][web:12][web:13][web:14]

6. **Feedback & Performance**  
   Purpose: Enable both manager-to-report and report-to-manager feedback, including performance expectations.[web:4][web:6][web:9][web:12][web:14]

7. **Team & Collaboration**  
   Purpose: Explore team dynamics, communication quality, and collaboration challenges.[web:2][web:3][web:7][web:9][web:12][web:14]

8. **Manager & Company Feedback**  
   Purpose: Invite upward feedback and reflections on company direction and decisions.[web:4][web:5][web:9][web:12][web:14]

9. **Remote / Hybrid Work Experience** (optional)  
   Purpose: Address the unique challenges of remote and hybrid collaboration.[web:3][web:7][web:9]

10. **Wrap-Up & Action Items**  
    Purpose: Close with clear commitments on both sides and topics to revisit next time.[web:4][web:9][web:15]

---

## Question Library (Initial v1)

The initial question set should include ~5–8 questions per category, paraphrased from and inspired by widely used 1:1 question lists, but written in original wording to avoid copying source text.[web:1][web:3][web:4][web:5][web:6][web:7][web:9][web:10][web:12][web:14][web:15]

Below are example v1 questions for each category; you can encode these directly into a JSON/TS data structure.

### 1. Icebreaker & Rapport

- What’s a recent highlight from your life outside of work?
- If this past week had a "weather forecast," how would you describe it?
- What’s something you’re looking forward to in the next few weeks?
- What hobby or interest have you been enjoying lately?
- Is there anything fun or memorable that happened since we last spoke?

### 2. Check-in & Wellbeing

- How are you feeling about work and life right now?
- On a scale of 1–10, how sustainable does your current workload feel?
- What has been draining your energy recently, and what’s been energizing you?
- How is your work-life balance feeling this week?
- Is there anything personal or work-related you’d like me to be aware of?

### 3. Current Work & Status

- What are your top priorities between now and our next 1:1?
- What took most of your time this past week, and did it feel like the right focus?
- Which projects are you most excited about right now?
- Is there anything you’re working on that you’re not sure really matters?
- Are any responsibilities on your plate that you think someone else should own?

### 4. Wins & Challenges ("What’s Going Well / Not Well")

- What’s a recent win you’re proud of that I might not know about?
- What has felt most frustrating or challenging lately?
- Are there small annoyances or friction points that keep showing up and never get fixed?
- Do you see any risks or issues on the horizon that we haven’t talked about yet?
- If you had an uninterrupted day tomorrow, what would you tackle first?

### 5. Goals & Career Development

- When you think about yourself 2–3 years from now, what kind of work do you hope to be doing?
- What skills or experiences would you most like to develop over the next year?
- Are there stretch projects or responsibilities you’d like to take on?
- How well does your current role support your longer-term career goals?
- Who (inside or outside the company) would you like to learn from, and about what?

### 6. Feedback & Performance

- What do you feel you’ve been doing particularly well recently?
- Where do you see room for improvement in your work, and how can I help?
- What expectations for your role or performance could be clearer?
- What feedback have you heard (from me or others) that you’d like to unpack together?
- How do you prefer to receive feedback and recognition (e.g., privately or publicly)?

### 7. Team & Collaboration

- How are things going with the people you work most closely with?
- Are there any interactions or team dynamics you’d like to talk through?
- Do you feel our communication patterns help you do your best work?
- Are there cross-functional projects or teams you’d like to collaborate with more?
- What’s one thing we could do that would improve the team’s performance or collaboration?

### 8. Manager & Company Feedback

- What’s one thing I could do differently that would make your work life better?
- Do you feel that leadership communicates enough context about where the company is heading?
- How aligned do you feel with the company’s current direction and priorities?
- Is there any recent decision you wish you’d been more involved in or informed about?
- If you were in my role (or in senior leadership), what’s one change you’d make?

### 9. Remote / Hybrid Work Experience (optional)

- What aspects of working remotely or in a hybrid setup are most challenging for you right now?
- Do you get enough informal contact with the team, or does it feel like everything is a scheduled meeting?
- When you’re stuck, do you know who to reach out to and how?
- Are our meeting times and communication channels working well across time zones and schedules?
- Is anything about our remote/hybrid setup wearing on you over time?

### 10. Wrap-Up & Action Items

- What is one concrete action you’ll take based on today’s conversation?
- What is one concrete action I should take to better support you before our next 1:1?
- Are there topics we didn’t get to today that you’d like to add to the next agenda?
- What would make our next 1:1 feel especially valuable to you?
- Is there anything we should stop doing, start doing, or continue doing based on today’s discussion?

These prompts are intentionally open-ended to avoid yes/no answers and align with guidance that effective 1:1s prioritize connection, blockers, growth, feedback, and commitments rather than pure status reporting.[web:3][web:7][web:9][web:15]

---

## User Stories

### Manager-centric

- As a manager, I want to quickly select a conversation topic (e.g., goals, feedback, wellbeing) so I can keep our 1:1 focused and meaningful.[web:3][web:9]
- As a manager, I want to generate a single, clear question at a time so I can ask it, listen, and then optionally move to the next prompt without overwhelming my report.
- As a manager, I want to copy questions to the clipboard so I can paste them into meeting notes or chat.

### Direct-report-centric

- As an individual contributor, I want a category of questions I can use to ask my manager about expectations, feedback, and growth opportunities.[web:14]
- As an individual contributor, I want the app to suggest questions that help me bring up difficult topics (e.g., workload, stress, team issues) in a structured way.[web:5][web:6][web:12]

### Shared

- As a meeting participant, I want to see which category I’m currently using so I understand the purpose of the question I’m being asked.
- As a meeting participant, I want to avoid repeated questions within a single category during a session so the conversation stays fresh.

---

## Functional Requirements

### Core Features

1. **Category Selection**  
   - Display a set of category buttons or tabs (e.g., Icebreaker, Wellbeing, Status, Wins & Challenges, Goals, Feedback, Team, Manager/Company, Remote, Wrap-Up).
   - Include an "All categories" option that pulls questions from the entire library.

2. **Random Question Generation**  
   - When the user selects a category and clicks "Give me a question," show one random question from that category.
   - Provide a "Next question" / "Another question" button that generates a different question from the same category, without repeating until all questions in that category have been surfaced in the current session.

3. **Question Display**  
   - Show the current category label and question prominently in the main viewport, optimized for screen sharing.
   - Optionally display a short hint like "Try follow-ups such as ‘Tell me more about that’ or ‘What would help?’" underneath the question.

4. **Copy to Clipboard**  
   - Provide a "Copy question" button that copies the question text to the clipboard for note-taking or chat.

5. **Session State (Client-side only)**  
   - Keep track of which questions have been shown per category in the current browser session so "Next question" avoids immediate duplicates.
   - Reset per-category history when the user leaves the site or explicitly clicks "Reset session."

### Nice-to-Have (v1.1+)

- Ability to **favorite** specific questions and later filter by "Favorites" for recurring topics.
- A lightweight **timer** or "time spent in this category" indicator to encourage moving across themes, mirroring guidance to rotate between check-in, work, growth, and feedback.[web:3][web:7]

---

## Non-Functional Requirements

- **Static deployment**: All functionality must work client-side with no backend calls, suitable for GitHub Pages hosting.
- **Performance**: Initial load under ~2 seconds on typical broadband; minimal JS bundle and no heavy dependencies beyond the chosen framework.
- **Accessibility**:  
  - Keyboard-navigable category selection and buttons.  
  - Sufficient color contrast and scalable typography for readability in screen-share scenarios.
- **Responsiveness**: Layout should work on desktop, tablet, and mobile; optimize first for desktop/laptop because 1:1s are often run from those devices.[web:15]

---

## UX / UI Requirements

### Layout

- **Primary layout**:  
  - Left (or top) section: category list as buttons or pills.  
  - Main content area: large, centered question text with category name and action buttons ("Give me a question," "Next question," "Copy").
- Design for **single-question focus**: avoid clutter, multiple questions on screen, or heavy navigation; it should feel like drawing one card from a deck.

### Interactions

- Category click → immediately either show the last question for that category in this session or prompt the user to click "Give me a question."  
- "Give me a question" → display a question with a subtle animation (e.g., fade-in) to make the interaction feel intentional but lightweight.  
- "Next question" → replace the question text and maintain category context.

### Visual Style

- Clean, minimal aesthetic: neutral background, clear typography (e.g., system fonts or a single accessible web font), accent color for category selection.
- Category icons or subtle color tags are optional; focus on text clarity rather than heavy visuals.

---

## Data Model

Represent the question library as a static data structure (e.g., TypeScript or JSON) loaded at build time.

```ts
type CategoryId =
  | "icebreaker"
  | "wellbeing"
  | "status"
  | "wins_challenges"
  | "goals"
  | "feedback"
  | "team"
  | "manager_company"
  | "remote"
  | "wrap_up";

interface Question {
  id: string;
  category: CategoryId;
  text: string;
}

const QUESTIONS: Question[] = [
  { id: "icebreaker_1", category: "icebreaker", text: "What’s a recent highlight from your life outside of work?" },
  // ...
];
```

Session state can be tracked with an in-memory map from `CategoryId` to a set of `Question.id`s already shown.

---

## Technical Stack and Deployment

### Stack

- **Framework**: React (with Vite or similar bundler) and TypeScript for type-safe question structures and simple component organization.[web:15]
- **Styling**: CSS Modules or a lightweight utility framework (e.g., Tailwind) — whichever keeps bundle size and complexity low.
- **State Management**: Local component state or React Context; no external state management library required.

### Deployment

- Build static assets with Vite (`npm run build`).
- Deploy the `dist` folder to GitHub Pages using GitHub Actions or manual configuration.
- Ensure routing is simple (single-page app with hash or root path only) to avoid issues with GitHub Pages.

---

## Analytics and Telemetry (Optional)

While v1 can ship without analytics, optional enhancements could include:

- Simple page-view tracking via a privacy-respecting analytics tool to understand usage.
- Client-side tracking of category clicks and "Next question" usage (aggregated only) to identify which categories are most helpful.

Any analytics should avoid collecting personal data, aligning with the app’s role as a simple utility rather than an HR system.[web:15]

---

## Future Enhancements (v2+)

- **Custom Question Sets**: Allow managers or teams to add their own questions via local storage, creating a team-specific deck.
- **AI-assisted prompts**: Integrate with an API to generate tailored questions based on role, seniority, or recent topics (out of scope for static v1).
- **Export to notes**: One-click export of asked questions to markdown for meeting notes.
- **Mobile-friendly "coach mode"**: A minimal mobile view for managers to use the app as a coaching prompt list during in-person conversations.

These enhancements would build on the core insight that effective 1:1s revolve around a repeatable set of themes and high-quality, open-ended questions.[web:3][web:7][web:9][web:10]

---

This PRD should be sufficient to drive implementation of a small React + GitHub Pages application that surfaces researched, best-practice 1:1 questions in clear categories for productive manager–direct report conversations.[web:1][web:3][web:9]
