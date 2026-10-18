# Abdullah Portfolio

A modern, dark-themed portfolio with red accents for a Full-Stack Software Engineer. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Overview

This portfolio showcases professional experience, skills, and projects with smooth animations and a fully responsive design. It includes:

- Smooth animations with Framer Motion
- Fully responsive design
- Interactive skills visualization
- Detailed project case studies
- Section-based navigation with scroll progress
- Optimized dark theme

## Tech Stack

| Category      | Technology                                      |
| ------------- | ----------------------------------------------- |
| Framework     | Next.js 16 (App Router, Turbopack)              |
| UI Library    | React 19                                        |
| Styling       | Tailwind CSS 4                                  |
| Animation     | Framer Motion                                   |
| Icons         | lucide-react, react-icons                       |
| Typography    | Poppins, Plus Jakarta Sans, Geist Mono          |
| Code Quality  | ESLint 9                                        |

**Important:** This project uses Next.js 16 with breaking changes. Before modifying framework code, consult `node_modules/next/dist/docs/` (see [AGENTS.md](AGENTS.md)).

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/abdullah-portfolio.git
   cd abdullah-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start development server              |
| `npm run build`   | Create optimized production build     |
| `npm start`       | Serve production build locally        |
| `npm run lint`    | Run ESLint to check code quality      |

## Project Structure

```
src/
├── app/
│   ├── layout.js               Root layout, fonts, metadata
│   ├── page.js                 Home page (assembles the sections)
│   ├── globals.css             Theme tokens, base typography
│   ├── icon.svg                Favicon
│   └── projects/[slug]/page.js Dynamic case-study page for each project
├── components/
│   ├── layout/                 Navbar, Footer, ScrollProgress, ScrollToTop
│   ├── sections/               Hero, TechMarquee, About, Skills, Projects,
│   │                           WhyPartner, Experience, Testimonials, CTA
│   ├── projects/               ProjectDetail component
│   └── ui/                     Logo, Reveal (reusable components)
└── data/                       All site content (one file per topic)
    ├── index.js                Central export point
    ├── navigation.js
    ├── about.js
    ├── skills.js
    ├── projects.js
    ├── tech-stack.js
    ├── why-partner.js
    ├── experience.js
    └── testimonials.js
public/                         Static assets (images, files)
```

**Path Aliases:** The `@/` alias points to `src/`, so imports look like `@/components/ui/Reveal` and `@/data`.

## Editing Content

All content is stored in `src/data/` for easy updates without touching component code.

### Projects

Edit `src/data/projects.js` to add or modify projects. Each project needs a unique `slug` which generates a page at `/projects/<slug>`.

```javascript
{
  id: 1,
  slug: 'my-project',
  title: 'My Project',
  description: 'Brief description',
  // ... more fields
}
```

### Skills

Edit `src/data/skills.js` to update skill categories and proficiency levels (shown as percentages).

### Other Content

| File                  | Purpose                           |
| --------------------- | --------------------------------- |
| `navigation.js`       | Navbar menu items                 |
| `about.js`            | About section text and bio        |
| `tech-stack.js`       | Technologies for marquee          |
| `why-partner.js`      | Value propositions                |
| `experience.js`       | Work history timeline             |
| `testimonials.js`     | Client reviews                    |

## Customization

### Colors

The primary accent is `red-500` and `red-600` on a dark background. Edit colors in:
- `src/app/globals.css` for CSS custom properties
- Tailwind utility classes in components

### Typography

Fonts are configured in `src/app/layout.js`:
- **Poppins** for body text
- **Plus Jakarta Sans** for headings
- **Geist Mono** for code

### Animations

Framer Motion animations are configured in individual components. Adjust timing and easing as needed.

## Things to Personalize

Before publishing, update these placeholders:

**Download Resume Button**  
Located in `src/components/sections/Hero.js`. Place your CV in `public/` (e.g., `public/Abdullah-CV.pdf`) and update the link.

**Social Links**  
Located in `src/components/layout/Footer.js`. Replace the generic links with your actual profiles.

**Images**  
Replace stock images in About and Experience sections. Place your images in `public/` and update the references.

**Sample Data**  
Update skill percentages, project stats, and testimonials with your real information.

## Deployment

This site is fully static and can be deployed to any Next.js host.

**Vercel (Recommended)**  
1. Import your repository at [vercel.com/new](https://vercel.com/new)
2. Deploy with default settings

**Image Configuration**  
Remote images are allowed for `picsum.photos`, `images.unsplash.com`, and `placehold.co` in `next.config.mjs`. Add any additional image hosts there.

## License

This project is open source and available under the MIT License.
