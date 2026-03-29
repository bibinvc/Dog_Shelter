# Dog Shelter

Dog Shelter is a Vue 2 single-page app for browsing adoptable dogs by breed and saving a shortlist of favorites in local storage.

## What Changed

- Replaced the old shop-style data model with a shelter-focused dataset.
- Added unique dog records with cleaner profile details and live age formatting.
- Fixed routing so the app opens on `/` and older routes redirect correctly.
- Rebuilt the favorites flow to use safe local storage handling and empty states.
- Cleaned the UI to remove stale product pricing/cart references.
- Fixed the production build configuration for modern Node versions.

## Features

- Browse all dogs from one landing page
- Filter by breed
- Search by name, breed, status, or profile notes
- Save and remove favorite dogs
- Persist favorites between sessions with local storage
- Build-ready configuration for GitHub Pages

## Tech Stack

- Vue 2
- Vue Router
- Vuex
- Bootstrap 4 / BootstrapVue
- SweetAlert

## Getting Started

```bash
npm install
npm run serve
```

## Available Scripts

```bash
npm run serve
npm run lint
npm run build
npm run deploy
```

`npm run deploy` builds the app and publishes the `dist` output with `gh-pages`.

## Project Structure

```text
src/
  components/     reusable UI blocks
  data/           shelter categories and dog records
  layouts/        app shell components
  pages/          route-level views
  store/          Vuex modules
  utils/          formatting helpers
```

## Notes

- Favorites are stored under the browser key `dog-shelter-favorites`.
- The production base path is configured for the GitHub repository `Dog_Shelter`.
