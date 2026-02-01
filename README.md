# Academic Home Page

This page is built with `astro` and hosted on cloudflare pages at [milescb.com](https://milescb.com)

## Editing this site to make it your own

1. Update `src/pages/index.astro` with your about text, research interests, etc
1. Update social icons and links in `src/components/Footer.astro`
1. Update `public/content/documents/publications.bib` with your publications and presentations
1. Update `src/content/cv.ts`, and the associated `public/content/documents/cv.pdf`
1. Update the project markdown files in `src/pages/projects`, and the associated page layout in `src/components/Header.astro`

Now you have your own academic website!

## Astro Commands Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

