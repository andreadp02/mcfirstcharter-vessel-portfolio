// Dati indipendenti dalla lingua. Tutti i testi stanno in src/lib/i18n.js.

export const site = {
	name: 'McFirst Charter',
	email: 'mariodiprima63@gmail.com',
	whatsapp: '+393402755363'
};

export const boat = {
	name: 'VERA',
	model: 'Dufour 460 Grand Large',

	// I file vanno in static/img/ — vedi static/img/README.md
	// Le descrizioni (alt) sono in i18n.js: `photoAlts`, stesso ordine.
	photos: [
		'/img/photo-01.jpg',
		'/img/photo-02.jpg',
		'/img/photo-03.jpg',
		'/img/photo-04.jpg',
		'/img/photo-05.jpg',
		'/img/photo-06.jpg',
		'/img/photo-07.jpg',
		'/img/photo-08.jpg',
		'/img/photo-09.jpg'
	],

	layout: '/img/deck-plan.jpg'
};
