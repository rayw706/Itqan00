# إتقان (Itqan) — Facility Intelligence Dashboard

A bilingual (Arabic/English) facility & asset management dashboard with a live AI assistant and AI-generated recommendations, powered by **Groq**.

## Project structure

```
itqan-dashboard/
├── index.html          # Main page (login screen + dashboard app)
├── css/
│   └── styles.css      # All styling
├── js/
│   └── app.js          # App logic, data, i18n, calls to /api/groq
├── api/
│   └── groq.js         # Serverless proxy — holds your Groq key server-side
├── vercel.json          # Routes static files + the API function
└── .vscode/
    └── extensions.json # Recommends the Live Server extension
```

## How the AI is wired up

Visitors to your deployed demo **never see or enter a Groq API key**. The
browser calls your own `/api/groq` endpoint, which is a small serverless
function that attaches your key (read from a server-side environment
variable) and forwards the request to Groq. This is the safe way to demo
an AI feature publicly — the alternative (putting the key directly in
`app.js`) would expose it to anyone who opens dev tools, and they could
run up your bill or get your key banned.

## Deploying for your demo (Vercel — free, ~2 minutes)

1. Push this folder to a GitHub repo (or use the Vercel CLI to deploy the
   folder directly — `npx vercel` from inside `itqan-dashboard/`).
2. Import the repo at **vercel.com** → "Add New Project."
3. In the project's **Settings → Environment Variables**, add:
   - **Name:** `GROQ_API_KEY`
   - **Value:** your key from https://console.groq.com/keys
4. Deploy. Vercel auto-detects `index.html`/`css`/`js` as static files and
   `api/groq.js` as a serverless function — no build step needed.
5. Share the resulting `https://your-project.vercel.app` URL. Anyone who
   opens it gets the login screen, then a fully working AI assistant —
   with your key staying on the server the whole time.

Netlify and Cloudflare Pages work the same way in spirit (static site +
one serverless function) if you'd rather use those — the function just
needs to live in their equivalent functions folder and read the same
`GROQ_API_KEY` environment variable; the request/response shape in
`api/groq.js` can be reused almost as-is.

## Running it locally in VS Code

Since the AI features now depend on the serverless function, opening
`index.html` directly (or via Live Server) will load the dashboard fine,
but AI calls to `/api/groq` will fail with a 404 — there's no server to
handle that route locally. Two options:

- **Easiest:** just deploy to Vercel (see above) and demo from there —
  the AI works out of the box once `GROQ_API_KEY` is set.
- **To test locally too:** install the Vercel CLI (`npm i -g vercel`) and
  run `vercel dev` from inside `itqan-dashboard/`. It runs your static
  files and the `api/groq.js` function together on `localhost:3000`,
  reading `GROQ_API_KEY` from a local `.env` file
  (`GROQ_API_KEY=gsk_...` — don't commit this file).

## Logging in

The dashboard is gated behind a simple demo login screen (client-side only — there's no real user database):

- **Username:** `admin`
- **Password:** `itqan2026`

Change these in `js/app.js` — look for `DEMO_USER` and `DEMO_PASS` near
the bottom of the file. For a real deployment beyond a demo, swap this
for proper authentication against a backend.

## AI model

The gear icon (⚙️) in the top bar lets you switch which Groq model is
used (e.g. `llama-3.3-70b-versatile`, `openai/gpt-oss-120b`). This choice
is just saved in the visitor's browser — it doesn't touch your API key.
See https://console.groq.com/docs/models for the current full model list.

If `GROQ_API_KEY` isn't set on the server, AI calls fail gracefully:
the assistant shows a clear notice, and Recommendations fall back to a
rule-based generator so the dashboard never looks broken during a demo.

## Currency

All monetary values are shown in **SAR** (Saudi Riyal / ﷼) — no dollar signs anywhere in the app.

## Notes

- This is a demo/hackathon-style dataset (mock assets, buildings, and maintenance records) generated in `js/app.js` — not connected to any real facility system.
- Keep your `GROQ_API_KEY` out of git — only set it via your hosting provider's environment variable settings.
