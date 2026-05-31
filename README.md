# Bhavya Gera — Portfolio

A modern, animated, single-page portfolio for **Bhavya Gera** — AI/ML Engineer.

Built with **React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion**.

> Replaces the older static portfolio at `bhavyagera1212.github.io/portfolio` with a refreshed design system, glassmorphism cards, animated gradients, scroll-driven motion, and a structured information architecture pulled directly from the latest CV.

---

## Features

- Dark, premium UI with aurora gradient + animated grid background
- Sticky, scroll-aware navbar with active-section highlighting
- Hero section with code-card terminal mock and quick stats
- About / stats grid + education timeline
- Experience timeline (Nutanix MTS Intern — Agentic AI, LLM Eval, RAG)
- Project showcase (Punjabi Multimodal SDXL, Lung Cancer 99.5%, Lip Reading 98.5%)
- Research / Publications card (Pansharpening — In Progress)
- Categorised skill chips (Languages, ML/DL, Backend, Tools)
- Honors & Awards + Volunteer experience
- Contact section with quick email CTA
- Fully responsive, accessible, reduced-motion friendly

---

## Tech Stack

| Layer       | Choice                                |
| ----------- | ------------------------------------- |
| Framework   | React 19 + Vite 6                     |
| Language    | TypeScript (strict)                   |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations  | Framer Motion                         |
| Icons       | lucide-react                          |
| Fonts       | Inter, Space Grotesk, JetBrains Mono  |

---

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Achievements.tsx
│   │   ├── About.tsx
│   │   ├── Background.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   ├── Section.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── data.ts          ← edit your resume content here
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

All resume content (experience bullets, project tech stacks, awards, links) lives in **one file**:

> `src/data.ts`

Update that file to update the entire site.

---

## Run Locally

```bash
# from the repo root
cd portfolio

# 1. install deps
npm install

# 2. start dev server (http://localhost:5173)
npm run dev

# 3. production build
npm run build
npm run preview
```

Node 18+ recommended.

---

## Deploy

### Option 1 — Vercel (recommended)

1. Push the `portfolio/` folder to a GitHub repo.
2. Import into Vercel → Framework preset: **Vite** → leave defaults → Deploy.

### Option 2 — GitHub Pages

The `vite.config.ts` ships with `base: "./"` so the `dist/` build is portable.

```bash
npm run build
# then publish the dist/ folder via gh-pages, or push to a `gh-pages` branch.
```

To replace the existing `bhavyagera1212.github.io/portfolio`, push the contents of `dist/`
to the `gh-pages` branch (or to `main` of `bhavyagera1212.github.io` if it's a user site).

---

## Customising

- **Content / copy** → `src/data.ts`
- **Colors / theme tokens** → `src/index.css` (under the `@theme` block)
- **Sections order** → `src/App.tsx`
- **Section header styling** → `src/components/Section.tsx`

---

## License

Personal portfolio — all content © Bhavya Gera. Code structure free to fork for inspiration.
