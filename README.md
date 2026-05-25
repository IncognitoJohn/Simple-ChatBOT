# HumphreyAI (React + Vite + Groq Gateway)

HumphreyAI is a chat UI built with React + Vite + Tailwind CSS, backed by a small Express "gateway" that forwards the conversation to Groq chat completions.

## Repo Layout

```text
/
  src/            React app (chat UI)
  public/         Static assets (robot.jpg, User.jpg, favicon.svg)
  groq-backend/   Express API that calls Groq (LLM)
```

## Local Development

Prereqs: Node.js (LTS recommended) and npm.

### 1) Start The Backend (Groq gateway)

```bash
cd groq-backend
npm install
```

Create `groq-backend/.env`:

```env
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

Run:

```bash
node index.js
```

Backend will listen on `http://localhost:5000` by default.

### 2) Start The Frontend (React app)

```bash
cd ..
npm install
```

Create `.env.local` in the repo root to point the UI at your local backend:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Run:

```bash
npm run dev
```

## Configuration

Frontend env vars (Vite):

- `VITE_API_BASE_URL` (optional): base URL for the backend used by `src/ChatInput.jsx`.
  - If unset, the client falls back to `https://humphreyai.onrender.com`.

Backend env vars:

- `GROQ_API_KEY` (required): Groq API key used by `groq-sdk`.
- `PORT` (optional): server port (defaults to `5000`).

## API

### `POST /api/chat`

Request body:

```json
{
  "messages": [
    { "text": "Hello", "sender": "user", "key": "..." },
    { "text": "Hi!", "sender": "robot", "key": "..." }
  ]
}
```

Response body:

```json
{ "reply": "..." }
```

## Scripts

Frontend (repo root):

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

Backend (`groq-backend/`):

- `node index.js`

## Notes

- `groq-backend/.env` is gitignored (keep secrets out of version control).
- User/bot avatar images are served from `public/` (`robot.jpg`, `User.jpg`).
