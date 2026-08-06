# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Il pubblico principale è **straniero**: visitatori di lingua inglese e spagnola
che cercano una barca nel Mediterraneo occidentale. Arrivano da ricerca o da
portali, non conoscono il brand, e stanno confrontando più imbarcazioni prima di
scrivere a qualcuno.

Secondo pubblico, ugualmente dichiarato: **agenzie e portali di charter**. Per
loro il sito è una vetrina di credibilità e una scheda barca verificabile, non
una pagina di vendita al cliente finale.

Il pubblico italiano esiste (il sito nasce in italiano) ma non è il target
prioritario.

## Product Purpose

McFirst Charter noleggia **una sola barca**, la Dufour 460 Grand Large "VERA":
14 metri, 4 cabine, 4 bagni. Il sito esiste per far arrivare una richiesta di
disponibilità via email o WhatsApp — **non c'è prenotazione online**: la tariffa
settimanale è pubblica, si contatta per verificare le date e prenotare. Il
successo è una conversazione avviata con date e numero di persone.

## Positioning

Non è una flotta: è una barca sola, curata direttamente da chi la possiede, con
la rotta costruita insieme all'equipaggio invece che venduta come pacchetto
fisso. Il noleggio è disponibile **sia bareboat sia con skipper**, a scelta del
cliente: un portale di flotta non può offrire lo stesso rapporto diretto, e un
charter con solo skipper non può offrire la stessa flessibilità di formula.

## Operating Context

- **Porto base: Alicante** (costa peninsulare spagnola). La base **può cambiare
  in futuro** — nessun testo deve trattarla come permanente.
- **Zona di navigazione: Baleari** (Ibiza, Formentera e le isole vicine) e la
  costa antistante. Alicante è il punto di partenza verso le isole, non una meta
  balearica: la distinzione va rispettata in ogni copy.
- Il visitatore decide con mesi di anticipo, confronta più barche, e valuta su
  posti letto, bagni, condizioni della barca e chiarezza di chi risponde.
- Il contatto avviene fuori dal sito: email e WhatsApp.

## Capabilities and Constraints

- Sito statico **completamente prerenderizzato**: SvelteKit + Tailwind v4,
  `@sveltejs/adapter-cloudflare`, deploy su Cloudflare Pages. Nessun backend,
  nessun database, nessun form server-side.
- **Tre lingue: it / en / es**, un solo albero di rotte (`/it/boat`, `/en/boat`,
  `/es/boat`). Tutti i testi in `src/lib/i18n.js`, stesse chiavi per lingua.
  Aggiungere una lingua richiede una voce in `dict`, una in `langs` e il codice
  in `entries()` di `src/routes/[lang]/+page.js`.
- **Deciso in questo giro:** `/` deve **rilevare la lingua del browser** e
  reindirizzare tra it/en/es. Oggi rimanda sempre a `/it`
  (`src/routes/+page.js`) — è un lavoro ancora da fare, ed è un
  reindirizzamento lato Cloudflare o client, non lato server persistente,
  perché il sito è prerenderizzato.
- Cinque pagine per lingua: home, barca, noleggio, itinerari, chi siamo. La
  pagina noleggio (`/[lang]/charter`) raccoglie tariffe, condizioni ed extra,
  poi il porto base con mappa e come arrivare, e **chiude con i contatti**
  (`#contact`, email e WhatsApp). È l'unica sezione contatti del sito: ogni CTA
  "richiedi disponibilità", in navbar, footer e in fondo alle altre pagine,
  punta a `/[lang]/charter#contact`.
- **Tutti gli importi stanno in `src/lib/site.js`**, mai nei testi: `fees` per
  cauzione ed extra, `seasons` per la tariffa settimanale e le finestre di
  stagione (date `MM-GG`, ricorrenti). Sono dati indipendenti dalla lingua,
  richiamati per chiave da `i18n.js` (`charter.rules`, `charter.extras`,
  `charter.seasons`) e formattati a runtime con `toLocaleString` /
  `toLocaleDateString`. **I prezzi cambiano di stagione in stagione**:
  aggiornarli è modificare un numero in un file, mai i tre dizionari.
- **Non deciso / non confermato**, da non inventare: posti letto, anno di
  costruzione, baglio, pescaggio, motore, marina esatta (marcati `todo: true` in
  `i18n.js`); itinerari reali (i tre attuali — weekend / settimana / su misura —
  sono segnaposto); email e numero WhatsApp reali (`src/lib/site.js` contiene
  ancora valori fittizi).

## Brand Commitments

- Nome dell'azienda: **McFirst Charter**. Nome della barca: **VERA**. Modello:
  **Dufour 460 Grand Large**.
- Voce attuale dei testi: sobria, concreta, prima persona plurale, nessuna
  enfasi da brochure. Parla di comfort, spazio e rotta condivisa.
- Il sito nasce da mockup Google Stitch ("Maritime Elegance") conservati in
  `stitch_blue_horizon_charter/`; sono l'origine dell'attuale palette e non un
  vincolo dichiarato.

## Evidence on Hand

- **Fotografie reali della barca**: 10 file in `static/img/dufour/` (esterni in
  navigazione, poppa, salone, dettagli) più `planimetria.jpg`. In
  `static/img/` ci sono `photo-01..08.jpg`; `photo-09.jpg` manca ancora, e
  `deck-plan.jpg` non è stato collegato dalla cartella `dufour/`.
- La planimetria della Dufour 460 GL è disponibile.
- **Assenze da non colmare inventando:** nessuna recensione, nessun cliente
  passato, nessun caso studio, nessuna referenza. L'attività di noleggio è in
  avvio: la barca esiste ed è di proprietà, ma non ci sono stagioni di charter
  alle spalle. Qualsiasi prova sociale sarebbe falsa.

## Product Principles

1. **Una barca, non un catalogo.** Il vantaggio è la specificità: tutto ciò che
   si può dire di VERA in concreto vale più di qualsiasi affermazione generica
   sul charter.
2. **Lo straniero è l'ospite di casa.** Inglese e spagnolo non sono traduzioni
   di cortesia: sono le lingue in cui il cliente principale decide.
3. **Niente prove che non esistono.** Nessuna recensione, nessun numero di
   clienti, nessun premio finché non sono reali. La prova disponibile sono le
   foto della barca e la trasparenza sui dati.
4. **I dati mancanti si dichiarano, non si arrotondano.** Un "da confermare"
   visibile costa meno credibilità di un valore inventato che un cliente esperto
   può smentire.
5. **Il sito serve a far scrivere qualcuno.** Ogni pagina deve rendere ovvio e
   facile il passaggio a email o WhatsApp con date e numero di persone.
6. **Alicante è la partenza, le Baleari sono la meta.** Non confondere le due
   cose, e non fissare la base come se fosse immutabile.

## Accessibility & Inclusion

Nessun requisito specifico stabilito. Vincoli di fatto già presenti nel codice:
il sito deve restare utilizzabile senza JavaScript (le animazioni di comparsa
degradano a contenuto visibile) e deve rispettare `prefers-reduced-motion`.
