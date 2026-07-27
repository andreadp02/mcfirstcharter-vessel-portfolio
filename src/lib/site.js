// Dati del sito in un solo posto: cambiali qui e si aggiornano tutte le pagine.

export const site = {
	name: 'McFirst Charter',
	tagline: 'Dufour 460 GL "VERA" — crociere a vela tra baie e isole.',
	// TODO: sostituire con i contatti reali
	email: 'info@mcfirstcharter.it',
	whatsapp: '390000000000'
};

export const nav = [
	{ href: '/barca', label: 'La Barca' },
	{ href: '/itinerari', label: 'Itinerari' },
	{ href: '/chi-siamo', label: 'Chi Siamo' }
];

export const boat = {
	name: 'VERA',
	model: 'Dufour 460 Grand Large',
	claim: '14 metri di comfort per vivere il mare con la famiglia o con gli amici.',

	// `todo: true` = valore ancora da confermare, viene reso in corsivo grigio
	specs: [
		{ label: 'Modello', value: 'Dufour 460 Grand Large' },
		{ label: 'Lunghezza', value: '14 m' },
		{ label: 'Cabine', value: '4' },
		{ label: 'Bagni', value: '4' },
		{ label: 'Posti letto', value: 'da confermare', todo: true },
		{ label: 'Anno', value: 'da confermare', todo: true },
		{ label: 'Baglio massimo', value: 'da confermare', todo: true },
		{ label: 'Pescaggio', value: 'da confermare', todo: true },
		{ label: 'Motore', value: 'da confermare', todo: true },
		{ label: 'Porto base', value: 'da confermare', todo: true }
	],

	equipment: [
		'4 cabine',
		'4 bagni',
		'Cucina completa',
		'Frigorifero',
		'Docce interne ed esterne',
		'GPS cartografico',
		'Autopilota',
		'Bimini',
		'Ampio prendisole',
		'Elica di prua'
	],

	// I file vanno in static/img/ — vedi static/img/LEGGIMI.md
	photos: [
		{ src: '/img/foto-01.jpg', alt: 'VERA in navigazione' },
		{ src: '/img/foto-02.jpg', alt: 'Pozzetto e prendisole' },
		{ src: '/img/foto-03.jpg', alt: 'Coperta' },
		{ src: '/img/foto-04.jpg', alt: 'Quadrato interno' },
		{ src: '/img/foto-05.jpg', alt: 'Cabina armatoriale' },
		{ src: '/img/foto-06.jpg', alt: 'Cabina ospiti' },
		{ src: '/img/foto-07.jpg', alt: 'Bagno' },
		{ src: '/img/foto-08.jpg', alt: 'Cucina' },
		{ src: '/img/foto-09.jpg', alt: 'Timoneria' }
	],

	layout: { src: '/img/planimetria.jpg', alt: 'Planimetria della Dufour 460 GL VERA' }
};

export const itineraries = [
	// TODO: sostituire con gli itinerari reali
	{
		title: 'Weekend',
		duration: '2–3 giorni',
		pace: 'Relax',
		text: 'Una fuga breve tra le baie più vicine, con soste per il bagno e cena a bordo o in porto.'
	},
	{
		title: 'Settimana tra le isole',
		duration: '7 giorni',
		pace: 'Medio',
		text: 'L’itinerario classico: tappe giornaliere brevi, ancoraggi in baie riparate e una nuova isola ogni giorno.'
	},
	{
		title: 'Su misura',
		duration: 'A scelta',
		pace: 'Su richiesta',
		text: 'Hai già in mente una rotta? Costruiamo insieme il percorso in base ai giorni disponibili e all’equipaggio.'
	}
];
