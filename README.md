# The Chronicles of the Indian Subcontinent

A responsive historical research website with an era-by-era registry structure. The three era pages are currently placeholders for the next research phase.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local URL after the development server starts.

## Production build

```sh
npm run build
npm run preview
```

## Publish for free with GitHub Pages

1. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push these changes to the `main` branch. The workflow builds the site and deploys it to GitHub Pages.
3. Once the workflow completes, the site will be available at `https://nischaykravi-blip.github.io/THE-HISTORY/`.

The Pages build also publishes a `404.html` fallback so direct links to pages within the site continue to work.
