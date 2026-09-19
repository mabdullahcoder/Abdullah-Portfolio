# Abdullah — Portfolio

A dark, red-accented personal portfolio for a Full-Stack Software Engineer. It presents the developer's story, skills, featured projects, experience and testimonials, with a dedicated case-study page for each project.

## Tech stack

| Area       | Choice                                                                 |
| ---------- | ---------------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, Turbopack)               |
| UI         | React 19, [Tailwind CSS 4](https://tailwindcss.com)                    |
| Animation  | [Framer Motion](https://www.framer.com/motion/)                        |
| Icons      | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts      | Poppins (body), Plus Jakarta Sans (headings), Geist Mono — via `next/font` |
| Linting    | ESLint 9 with `eslint-config-next`                                     |

> This project uses a recent Next.js release with breaking changes. Before changing framework-level code, read the guides in `node_modules/next/dist/docs/` (see [AGENTS.md](AGENTS.md)).

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script          | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create a production build         |
| `npm start`     | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Project structure

```
src/
├── app/
│   ├── layout.js               Root layout, fonts, metadata
│   ├── page.js                 Home page (assembles the sections)
│   ├── globals.css             Theme tokens, base typography
│   ├── icon.svg                Favicon
│   └── projects/[slug]/page.js Case-study page for each project
├── components/
│   ├── layout/                 Navbar, Footer, ScrollProgress, ScrollToTop
│   ├── sections/               Hero, TechMarquee, About, Skills, Projects,
│   │                           WhyPartner, Experience, Testimonials, CTA
│   ├── projects/               ProjectDetail (case-study content)
│   └── ui/                     Logo, Reveal (small reusable pieces)
└── data/                       All site content (one file per topic)
    ├── index.js                Re-exports everything — import from "@/data"
    ├── navigation.js
    ├── about.js
    ├── skills.js
    ├── projects.js
    ├── tech-stack.js
    ├── why-partner.js
    ├── experience.js
    └── testimonials.js
public/                         Static assets (e.g. portrait.png)
```

The `@/` alias points to `src/`, so imports look like `@/components/ui/Reveal` and `@/data`.

## Editing content

Text and numbers live in `src/data/`, not in the components:

- **Projects & case studies** — add or edit an entry in `projects.js`. Each entry needs a unique `slug`; its page is generated automatically at `/projects/<slug>`.
- **Skills** — edit `skills.js` (categories, skill levels as percentages, tools).
- **About, experience, testimonials, navigation** — edit the matching file.

Colours are Tailwind utilities (the accent is `red-500` / `red-600` on a black background). Font variables and the heading font are defined in `src/app/layout.js` and `src/app/globals.css`.

## Things to personalise

Before publishing, replace these placeholders:

- **Download Resume** button (`src/components/sections/Hero.js`) currently links to `#`. Put your CV in `public/` (for example `public/Abdullah-CV.pdf`) and point the button to `/Abdullah-CV.pdf` with the `download` attribute.
- **Social links** in `src/components/layout/Footer.js` point to the generic GitHub, LinkedIn and X homepages.
- **Photos** in About and Experience are stock images from picsum.photos; replace them with your own (place files in `public/`).
- **Skill percentages, project stats and testimonials** are sample content.

## Deployment

The site is fully static and deploys to any Next.js host. The quickest route is [Vercel](https://vercel.com/new): import the repository and deploy. Remote images are allowed for `picsum.photos`, `images.unsplash.com` and `placehold.co` in `next.config.mjs`; add any new image host there.
