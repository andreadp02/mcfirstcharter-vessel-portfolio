# Immagini

Una cartella per pagina, il nome del file è il soggetto. Finché il file manca, sul
sito compare un riquadro grigio con scritto il nome atteso.

| File | Dove appare | Soggetto |
|---|---|---|
| `home/sailing.jpg` | home — sfondo hero | VERA in navigazione, orizzontale |
| `home/cockpit.jpg` | home — intro | pozzetto / prendisole |
| `home/master-cabin.jpg` | home — anteprima galleria | cabina armatoriale |
| `home/guest-cabin.jpg` | home — anteprima galleria | cabina ospiti / bagno |
| `home/galley.jpg` | home — anteprima galleria | cucina |
| `about/deck.jpg` | about — hero | coperta / dettaglio esterno |
| `about/master-cabin.jpg` | about — tondo | cabina armatoriale |
| `boat/sailing.jpg` | boat — foto grande in alto | VERA in navigazione, orizzontale |
| `boat/cockpit.jpg` | boat — accanto al racconto | pozzetto / prendisole |
| `boat/deck.jpg` | boat — accanto alla scheda tecnica | coperta / dettaglio esterno |
| `boat/deck-plan.jpg` | boat — accanto alle dotazioni | planimetria della Dufour 460 GL |
| `boat/at-anchor.jpg` | boat — fascia a tutta larghezza | VERA all'ancora, molto orizzontale |
| `boat/saloon.jpg` | boat — galleria | quadrato interno |
| `boat/master-cabin.jpg` | boat — galleria | cabina armatoriale |
| `boat/guest-cabin.jpg` | boat — galleria | cabina ospiti / bagno |
| `boat/galley.jpg` | boat — galleria | cucina |
| `boat/helm.jpg` | boat — galleria | timoneria |

Lo stesso soggetto su più pagine è un file per cartella (copie): così ogni pagina
si può cambiare da sola.

Le pagine e i file sono elencati in `src/lib/site.js` (`photos`). Gli `alt` stanno
in `src/lib/i18n.js` (`photoAlts`), uno per lingua, **con chiave = nome del file**
senza estensione: `boat/master-cabin.jpg` → `'master-cabin'`. Aggiungendo un
soggetto nuovo, aggiungi la chiave in tutte e tre le lingue.

`sailing`, `deck` e `at-anchor` vengono ritagliate a tutta larghezza: usa immagini
orizzontali larghe almeno 1920px. Le altre almeno 1200px.
