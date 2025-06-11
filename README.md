# TypeScript Knowledge Hub

This is a recruitment project built with Astro and TinaCMS, hosted on Cloudflare Pages. The goal is to demonstrate frontend skills and implement a dynamic site powered by CMS and CI/CD.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                           |
| :------------------------ |:---------------------------------------------------------------------------------|
| `npm install`             | Installs dependencies                                                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`                                      |
| `npm run build`           | Build your production site to `./dist/`                                          |
| `npm run preview`         | Preview your build locally, before deploying                                     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                                 |
| `npm run astro -- --help` | Get help using the Astro CLI                                                     |
| `npx tinacms dev -c "npm run dev"`| Starts the dev server with TinaCMS enabled|

## 🗺️ Project Roadmap

This section tracks the development plan for the recruitment task. Tasks are marked as complete once delivered and tested.

- [x] Set up GitHub repository with `.gitignore` and basic Astro structure
- [x] Install and configure TinaCMS with Astro
- [ ] Define and configure link collection for footer
- [ ] Add rich text footer content editable via CMS
- [ ] Build paginated section for TypeScript knowledge entries
- [ ] Set up Playwright for E2E testing
- [ ] Configure CI/CD with GitHub Actions and Cloudflare Pages
- [ ] Optimize for Web Vitals & Lighthouse
- [ ] Deploy test report to separate Cloudflare Pages project
