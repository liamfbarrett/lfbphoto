# lfbphoto.com

Portfolio site built with [Astro](https://astro.build). Photos are resized and converted to AVIF/WebP
automatically at build time, so you only upload one good JPEG per photo.

## Adding photos (GitHub web interface)

1. Export each photo as a JPEG, about 2500px on the long edge (roughly 1-2 MB). Don't upload the huge originals.
2. In this repo, open the folder for the category, e.g. `src/photos/dance`.
3. Add file -> Upload files, drop the photos in, and Commit.
4. The site rebuilds in a minute or two.

- Photos show in filename order. Name them `01-name.jpg`, `02-name.jpg`... to control the order.
- Browser uploads are limited to about 100 files at a time and 25 MB per file.
- The About page photo goes in `src/photos/about/`.
- Photo folders: singles, protests-dissent, the-arts, concerts, portraits, slow-shutter, sports.
- The Singles folder is the homepage.

## Editing text and links

- Contact links, page names, and awards: `src/data/site.ts`
- About page text: `src/pages/about.astro`
- Reporting page links and titles: `src/data/reporting.ts` (paste each article address into `url`)
- Colors and spacing: `src/styles/global.css` (variables at the top)

To add a new category, add a line to `categories` in `src/data/site.ts` and create `src/photos/<slug>/`.

## Hosting on Cloudflare Pages

Connect this repo under Workers & Pages -> Create -> Pages -> Connect to Git, with:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

Then add `lfbphoto.com` under the project's Custom domains.

## Running locally (optional)

    npm install
    npm run dev
