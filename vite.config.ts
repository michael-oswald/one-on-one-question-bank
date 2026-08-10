import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this project from https://<user>.github.io/one-on-one-question-bank/,
// so assets must be requested from that sub-path. Applied in dev and preview too, so local
// runs hit the same URLs as production (dev server: http://localhost:5173/one-on-one-question-bank/).
export default defineConfig({
  base: '/one-on-one-question-bank/',
  plugins: [react()],
});
