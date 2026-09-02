# Kartik Rastogi — Portfolio

A dark, terminal-inspired developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide/Simple icons.

Live sections: Hero, About, Skills, Projects, Education, Experience, Achievements, Contact.


## 🔗 Links

🔴 Live Portfolio: https://kartik-portfolio-mu-nine.vercel.app/

---


## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173). Changes to any file hot-reload automatically.

## Build for production

```bash
npm run build
npm run preview   # optional, preview the production build locally
```

The build output goes to `dist/`.

## Deploy

**Vercel** (recommended):
1. Push this folder to a GitHub repo.
2. Go to vercel.com → sign in with GitHub → Add New → Project → import the repo.
3. Vercel auto-detects Vite (Build Command `npm run build`, Output Directory `dist`) — just click Deploy.
4. Every future `git push` to `main` auto-redeploys.

Prefer the CLI instead of GitHub? `npm i -g vercel`, then run `vercel` from this folder.

**Render** (alternative): create a Static Site, build command `npm run build`, publish directory `dist`.

**Custom domain**: Vercel project → Settings → Domains → add your domain and follow the DNS instructions it shows you. Don't want to buy one? `is-a.dev` gives developers a free subdomain (e.g. `kartik.is-a.dev`) that points straight at your Vercel deployment — see github.com/is-a-dev/register.

## Editing content

Everything text-based lives in one file: `src/data/data.js` — profile info, about copy, skills list, projects, education, experience, achievements, and nav links. Most updates (new project, new achievement, a tweaked bio line) only require editing that one file, no need to touch components.

Assets:
- `public/kartik.png` — hero photo
- `public/resume.pdf` — the file the Resume buttons download (swap in a new PDF with the same filename to update it)
- `public/favicon.svg` — browser tab icon

## Structure

```
src/
  components/   # one component per section (Hero, About, Skills, Projects, Education, Experience, Achievements, Contact, Navbar, Footer, Loader)
  data/data.js  # all editable content
  App.jsx       # layout, scroll-spy active-section tracking, page-load animation
  index.css     # Tailwind entry + a couple of global effects (scrollbar, selection color, grid background)
tailwind.config.js  # color tokens (ink/surface/blue/amber), fonts, custom animations
```

## Notes

- Contact form opens the visitor's email client (mailto) with the message pre-filled — there's no backend, so nothing is stored or sent silently.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via `index.html`.
- `react-icons/si` powers the tech logos in the Skills grid — if a future `react-icons` update renames or removes an icon, only `src/components/Skills.jsx` needs updating.
