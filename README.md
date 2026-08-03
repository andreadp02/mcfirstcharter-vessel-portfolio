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

## Deploy to Cloudflare Pages

```powershell
npx wrangler pages deploy .svelte-kit/cloudflare
```

Or from the dashboard: Pages → connect the repo → build command `npm run build`,
output directory `.svelte-kit/cloudflare`. The project name and compatibility
date live in `wrangler.jsonc`.

## Frequent changes

Text lives in **`src/lib/i18n.js`**, three times (it/en/es): specs
(`todo: true` = value shown in italics as "to be confirmed"), equipment, itineraries,
photo descriptions. Email, WhatsApp and photo file names live in
**`src/lib/site.js`**, only once.
