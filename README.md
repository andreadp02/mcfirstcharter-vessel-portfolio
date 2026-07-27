# McFirst Charter

Sito di **VERA**, Dufour 460 GL. SvelteKit + Tailwind v4, tutto prerenderizzato,
deploy su Cloudflare Pages con `@sveltejs/adapter-cloudflare`.

```
src/
  app.html                  lang, font (Inter + Playfair + Material Symbols)
  lib/site.js               TUTTI i testi/dati modificabili: contatti, specs, foto, itinerari
  lib/Img.svelte            <img> con segnaposto se il file manca
  routes/
    +layout.svelte          nav (con voce attiva) + footer, condivisi
    +layout.js              prerender = true
    layout.css              @theme Tailwind = palette "Maritime Elegance"
    +page.svelte            home + sezione #contatti
    barca/+page.svelte      galleria, scheda tecnica, dotazioni, planimetria
    itinerari/+page.svelte
    chi-siamo/+page.svelte
static/img/                 foto-01..09.jpg + planimetria.jpg (vedi LEGGIMI.md)
stitch_blue_horizon_charter/  mockup originali Google Stitch (non pubblicati)
```

## Sviluppo

```powershell
npm run dev          # http://localhost:5173
npm run check        # svelte-check
npm run build        # output in .svelte-kit/cloudflare
npm run preview      # build servita da wrangler
```

## Deploy su Cloudflare Pages

```powershell
npx wrangler pages deploy .svelte-kit/cloudflare
```

Oppure dalla dashboard: Pages → collega il repo → build command `npm run build`,
output directory `.svelte-kit/cloudflare`. Il nome progetto e la data di
compatibilità stanno in `wrangler.jsonc`.

## Modifiche frequenti

Quasi tutto si cambia in **`src/lib/site.js`**: email e WhatsApp, scheda tecnica
(`todo: true` = valore in corsivo "da confermare"), elenco dotazioni, nomi e
descrizioni delle foto, itinerari.

## Da completare

- [ ] Foto in `static/img/` (vedi `static/img/LEGGIMI.md`) — finché mancano il
      sito mostra un riquadro col nome del file atteso e la build stampa un avviso
- [ ] Valori `todo: true` nella scheda tecnica (`src/lib/site.js`)
- [ ] Email e numero WhatsApp reali (`src/lib/site.js`)
- [ ] Itinerari reali (`src/lib/site.js`)
- [ ] Storia reale in `src/routes/chi-siamo/+page.svelte`
