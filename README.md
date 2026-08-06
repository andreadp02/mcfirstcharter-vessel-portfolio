# McFirst Charter

Website for **VERA**, a Dufour 460 GL. SvelteKit + Tailwind v4, fully prerendered,
deployed to Cloudflare Pages with `@sveltejs/adapter-cloudflare`.

```
src/
  app.html                  <html lang="%lang%">, fonts (Inter + Playfair + Material Symbols)
  hooks.server.js           fills %lang% with the page's language
  lib/i18n.js               ALL text, one entry per language (it/en/es)
  lib/site.js               non-translatable data: contacts, boat name, photo list
  lib/Img.svelte            <img> that hides itself and its frame if the file is missing
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
npx -y npm@10.9.2 install   # only if you changed package.json - NOT plain `npm install`
npm run gen          # only if you changed bindings / compatibility in wrangler.jsonc
npm run check        # wrangler types --check + svelte-check
npm run build        # same command Cloudflare runs; if it fails here it fails there
git add -A; git commit -m "..."; git push
```


### npm version

Cloudflare builds with **npm 10.9.2** (the build image default - check the third
line of any build log: `Detected the following tools from environment: npm@...`).
The global npm on this machine is 11, and npm 11 rewrites `package-lock.json`
in a form npm 10 rejects (`npm ci` → "Missing: ... from lock file"). So the lock
must always be regenerated with npm 10:

```powershell
npx -y npm@10.9.2 install
```

Commit `package-lock.json` whenever it changes. To check it before pushing:

```powershell
npx -y npm@10.9.2 ci
```

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
