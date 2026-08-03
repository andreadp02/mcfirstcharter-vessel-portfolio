# McFirst Charter

Website for **VERA**, a Dufour 460 GL. SvelteKit + Tailwind v4, fully prerendered,
deployed to Cloudflare Pages with `@sveltejs/adapter-cloudflare`.

```
src/
  app.html                  <html lang="%lang%">, fonts (Inter + Playfair + Material Symbols)
  hooks.server.js           fills %lang% with the page's language
  lib/i18n.js               ALL text, one entry per language (it/en/es)
  lib/site.js               non-translatable data: contacts, boat name, photo list
  lib/Img.svelte            <img> with a placeholder if the file is missing
  routes/
    +layout.js/.svelte      prerender = true, CSS and favicon
    +page.js                "/" -> "/it"
    layout.css              @theme Tailwind = "Maritime Elegance" palette
    [lang]/
      +layout.js            loads the language dictionary (404 if unknown)
      +layout.svelte        nav (active item + IT/EN/ES) + footer
      +page.js               list of languages to prerender
      +page.svelte           home + #contact section
      boat/+page.svelte      gallery, specs, equipment, floor plan
      itineraries/+page.svelte
      about/+page.svelte
static/img/                 photo-01..09.jpg + deck-plan.jpg (see README.md)
stitch_blue_horizon_charter/  original Google Stitch mockups (not published)
```

## Languages

`/it`, `/en`, `/es` (`/` redirects to `/it`). Page paths stay the same across
all languages (`/en/boat`, `/es/about`): a single route tree, only the text
changes.

To add a language: a new entry in `dict` and in `langs` inside
`src/lib/i18n.js`, plus the code in `entries()` of `src/routes/[lang]/+page.js`.
Keys must match those of the other languages.

## Development

```powershell
npm run dev          # http://localhost:5173
npm run check        # svelte-check
npm run build        # output in .svelte-kit/cloudflare
npm run preview      # build served by wrangler
```

## Deploy

The repo is connected to Cloudflare: **every push to `main` triggers a build**
(`npm ci` + `npm run build`). There is nothing to deploy by hand.

### Before pushing

```powershell
npm install          # only if you changed package.json
npm run gen          # wrangler types -> worker-configuration.d.ts (only if wrangler.jsonc changed)
npm run check        # wrangler types --check + svelte-check
npm run build        # same command Cloudflare runs; if it fails here it fails there
git add -A; git commit -m "..."; git push
```

`npm run build` already runs `wrangler types --check`, so a green local build
means the Cloudflare build gets the same input.

### npm version

The Cloudflare build variable `NPM_VERSION = 11` must stay set: it matches the
local npm, so `package-lock.json` is generated and consumed by the same major.
Without it the image defaults to npm 10, which rejects a lock written by npm 11
(`npm ci` → "Missing: ... from lock file"). Commit `package-lock.json` whenever
it changes.

Manual deploy, if ever needed:

```powershell
npx wrangler pages deploy .svelte-kit/cloudflare
```

The project name and compatibility date live in `wrangler.jsonc`.

## Frequent changes

Text lives in **`src/lib/i18n.js`**, three times (it/en/es): specs
(`todo: true` = value shown in italics as "to be confirmed"), equipment, itineraries,
photo descriptions. Email, WhatsApp and photo file names live in
**`src/lib/site.js`**, only once.
