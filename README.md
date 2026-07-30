# McFirst Charter

Sito di **VERA**, Dufour 460 GL. SvelteKit + Tailwind v4, tutto prerenderizzato,
deploy su Cloudflare Pages con `@sveltejs/adapter-cloudflare`.

```
src/
  app.html                  <html lang="%lang%">, font (Inter + Playfair + Material Symbols)
  hooks.server.js           riempie %lang% con la lingua della pagina
  lib/i18n.js               TUTTI i testi, uno per lingua (it/en/es)
  lib/site.js               dati non traducibili: contatti, nome barca, elenco foto
  lib/Img.svelte            <img> con segnaposto se il file manca
  routes/
    +layout.js/.svelte      prerender = true, CSS e favicon
    +page.js                "/" -> "/it"
    layout.css              @theme Tailwind = palette "Maritime Elegance"
    [lang]/
      +layout.js            carica il dizionario della lingua (404 se sconosciuta)
      +layout.svelte        nav (voce attiva + IT/EN/ES) + footer
      +page.js              elenco lingue da prerenderizzare
      +page.svelte          home + sezione #contact
      boat/+page.svelte     galleria, scheda tecnica, dotazioni, planimetria
      itineraries/+page.svelte
      about/+page.svelte
static/img/                 photo-01..09.jpg + deck-plan.jpg (vedi README.md)
stitch_blue_horizon_charter/  mockup originali Google Stitch (non pubblicati)
```

## Lingue

`/it`, `/en`, `/es` (`/` rimanda a `/it`). Gli indirizzi delle pagine restano
uguali in tutte le lingue (`/en/boat`, `/es/about`): un solo albero di rotte,
solo i testi cambiano.

Per aggiungere una lingua: una nuova voce in `dict` e in `langs` dentro
`src/lib/i18n.js`, più il codice in `entries()` di `src/routes/[lang]/+page.js`.
Le chiavi devono essere le stesse delle altre lingue.

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

I testi stanno in **`src/lib/i18n.js`**, tre volte (it/en/es): scheda tecnica
(`todo: true` = valore in corsivo "da confermare"), dotazioni, itinerari,
descrizioni delle foto. Email, WhatsApp e nomi dei file foto stanno in
**`src/lib/site.js`**, una volta sola.

## Da completare

- [ ] Foto in `static/img/` (vedi `static/img/README.md`) — finché mancano il
      sito mostra un riquadro col nome del file atteso e la build stampa un avviso
- [ ] Valori `todo: true` nella scheda tecnica (`src/lib/i18n.js`, in tutte e tre le lingue)
- [ ] Email e numero WhatsApp reali (`src/lib/site.js`)
- [ ] Itinerari reali (`src/lib/i18n.js`)
- [ ] Storia reale (`about.p1` / `about.p2` in `src/lib/i18n.js`)
