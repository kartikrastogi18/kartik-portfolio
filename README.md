# Kartik Rastogi — Portfolio

A dark, terminal-inspired developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional, preview the production build locally
```

The build output goes to `dist/`.

## Deploy

**Vercel** (recommended, matches your stack):
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → it auto-detects Vite. Build command `npm run build`, output directory `dist`.

**Render**: create a Static Site, build command `npm run build`, publish directory `dist`.

## Before you publish, update:

- `src/data/data.js`
  - `profile.email`, `profile.github`, `profile.linkedin`, `profile.resumeUrl`
  - Real GitHub links for HostelZBuddy, Library Management System, QueryGen, Flappy Bird DQN, and Crop Recommendation System (currently pointing at your profile — swap in the actual repo URLs)
  - `codingProfiles` — real LeetCode/Codeforces handles and stats
- `profile.resumeUrl` — host your resume PDF (e.g. in `/public/resume.pdf`) and point the Download Resume button at it: `/resume.pdf`
- `index.html` — swap the Open Graph/meta description if you want a different social preview, and consider adding a real `og:image`

## Structure

```
src/
  components/   # one component per section (Hero, About, Skills, Projects, ...)
  data/data.js  # all editable content lives here — no need to touch components to update text
  App.jsx       # layout + scroll-spy + loader orchestration
```

Everything reads from `src/data/data.js`, so most updates (new project, new achievement, new coding stat) only require editing that one file.
