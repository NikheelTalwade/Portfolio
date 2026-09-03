<<<<<<< HEAD
# Portfolio — Nikheel Talwade

> Production-ready Angular portfolio application (Angular 21).

## Overview

This repository contains a modern, performance-focused personal portfolio built with Angular (standalone components, signals, SSR prerender). It includes build, test and deployment instructions.

## Requirements

- Node.js (16+ recommended)
- npm (11+)

## Setup

Install dependencies:

```bash
npm install
```

## Development

Run the dev server with live reload:

```bash
npm start
```

Open http://localhost:4200

## Build (production)

Generate a production build (browser + server bundles):

```bash
npm run build -- --configuration production
```

Output: `dist/nikheel-talwade`

## Serve SSR (optional)

Start the server bundle (after build):

```bash
node dist/nikheel-talwade/server/server.mjs
```

Or use the provided script:

```bash
npm run serve:ssr:nikheel-talwade
```

## Tests

Run unit tests with Vitest:

```bash
npm run test
```

## Deploy to GitHub Pages

This project can be published to GitHub Pages using the `gh-pages` branch. A simple approach (used for this repo):

```bash
# build
npm run build -- --configuration production

# create a temporary worktree, copy the browser build to the worktree root
git worktree add -B gh-pages .gh-pages-temp origin/gh-pages || git worktree add -B gh-pages .gh-pages-temp
rm -rf .gh-pages-temp/*
cp -r dist/nikheel-talwade/browser/* .gh-pages-temp/
cd .gh-pages-temp
git add --all
git commit -m "Deploy to gh-pages"
git push -u origin gh-pages --force
cd ..
git worktree remove .gh-pages-temp || true
rm -rf .gh-pages-temp || true
```

Then enable GitHub Pages in repository Settings → Pages → Branch: `gh-pages` / Folder: `/ (root)`.

Public URL (example): `https://<your-github-username>.github.io/Portfolio`

## Notes

- If Pages shows a 404 after deploy, wait 5–10 minutes for GitHub propagation and verify Pages settings.
- For SSR or dynamic hosting, deploy the `dist/nikheel-talwade/server` bundle to a Node host instead of Pages.

## Contributing

Follow conventional commits and open PRs for changes. Run tests and build locally before submitting.
# NikheelTalwade

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
# Portfolio
>>>>>>> origin/main
