// Dati indipendenti dalla lingua. Tutti i testi stanno in src/lib/i18n.js.

export const site = {
	name: 'McFirst Charter',
	email: 'mariodiprima63@gmail.com',
	whatsapp: '+393402755363'
};

export const boat = {
	name: 'VERA',
	model: 'Dufour 460 Grand Large'
};

// Base di partenza. Può cambiare: si modifica qui e seguono la pagina Il Porto,
// la mappa e la scheda tecnica della barca.
export const harbour = {
	marina: 'Marina Alicante',
	address: 'Muelle de Levante, 03001 Alicante, España',
	mapsQuery: 'Marina Alicante, Muelle de Levante, Alicante'
};

// Importi in euro. Le etichette stanno in i18n.js (`harbour.rules` / `harbour.extras`),
// riferite per chiave: il prezzo non va duplicato nelle tre lingue.
/** @type {Record<string, number>} */
export const charter = {
	deposit: 2000,
	cleaning: 150,
	skipper: 250,
	earlyCheckin: 250,
	tenderEngine: 100
};

// Una cartella per pagina: static/img/<pagina>/<soggetto>.jpg — vedi static/img/README.md.
// L'alt viene dal nome del file (il soggetto): i18n.js, `photoAlts`. Lo stesso soggetto
// usato su più pagine sta in entrambe le cartelle e condivide l'alt.
export const photos = {
	home: {
		hero: '/img/home/sailing.jpg',
		intro: '/img/home/cockpit.jpg',
		gallery: ['/img/home/master-cabin.jpg', '/img/home/guest-cabin.jpg', '/img/home/galley.jpg']
	},
	about: {
		hero: '/img/about/deck.jpg',
		portrait: '/img/about/us.jpg',
		skipper: '/img/about/skipper.jpg'
	},
	boat: {
		hero: '/img/boat/sailing.jpg',
		aboard: '/img/boat/cockpit.jpg',
		specs: '/img/boat/deck.jpg',
		deckPlan: '/img/boat/deck-plan.jpg',
		banner: '/img/boat/at-anchor.jpg',
		gallery: [
			'/img/boat/saloon.jpg',
			'/img/boat/master-cabin.jpg',
			'/img/boat/guest-cabin.jpg',
			'/img/boat/galley.jpg',
			'/img/boat/bathroom.jpg'
		]
	}
};
