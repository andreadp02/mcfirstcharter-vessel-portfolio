// Tutti i testi del sito, una voce per lingua. Le chiavi sono identiche nelle tre
// lingue: se ne aggiungi una in `it`, aggiungila anche in `en` e `es`.
// I dati non traducibili (foto, email, nome barca) stanno in site.js.

export const langs = [
	{ code: 'it', label: 'Italiano' },
	{ code: 'en', label: 'English' },
	{ code: 'es', label: 'Español' }
];

export const defaultLang = 'it';

/** @type {Record<string, any>} */
export const dict = {
	it: {
		tagline: 'Dufour 460 GL "VERA" — crociere a vela tra baie e isole.',
		cta: 'Richiedi disponibilità',
		contacts: 'Contatti',
		menu: 'Menu',
		language: 'Lingua',
		nav: [
			{ href: '/boat', label: 'La Barca' },
			{ href: '/itineraries', label: 'Itinerari' },
			{ href: '/harbour', label: 'Il Porto' },
			{ href: '/about', label: 'Chi Siamo' }
		],
		mailSubject: 'Richiesta disponibilità VERA',
		claim: '14 metri di comfort per vivere il mare con la famiglia o con gli amici.',

		home: {
			metaDesc:
				'Noleggio della Dufour 460 GL VERA: 14 metri, 4 cabine, 4 bagni. Crociere settimanali e vacanze relax tra baie e isole.',
			heroCta: 'Scopri la barca',
			introTitle: 'Spazio, comfort, mare',
			introP1:
				'Elegante e spaziosa, VERA è una Dufour 460 Grand Large ideale per crociere in famiglia o con amici, perfetta per vivere il mare in totale comfort.',
			introP2:
				'Ampi spazi interni ed esterni, cabine confortevoli, grande pozzetto prendisole e ottime prestazioni sia a vela che a motore. La disposizione intelligente degli ambienti garantisce privacy e vivibilità anche per gruppi numerosi.',
			introLink: 'Scheda tecnica e planimetria',
			aboardOverline: 'A bordo',
			aboardTitle: 'Tutto quello che serve',
			highlights: [
				{ icon: 'bed', title: '4 cabine', text: 'Doppie e confortevoli' },
				{ icon: 'shower', title: '4 bagni', text: 'Docce interne ed esterne' },
				{ icon: 'kitchen', title: 'Cucina completa', text: 'Con frigorifero' },
				{ icon: 'explore', title: 'GPS e autopilota', text: 'Elica di prua' }
			],
			galleryOverline: 'Galleria',
			galleryTitle: 'VERA in immagini',
			galleryLink: 'Vedi tutte le foto',
			strengths: [
				{
					icon: 'groups',
					title: 'Ideale per gruppi',
					text: 'Quattro cabine e quattro bagni: privacy e vivibilità anche per gruppi numerosi.'
				},
				{
					icon: 'sailing',
					title: 'Ottime prestazioni',
					text: 'Comportamento brillante sia a vela che a motore, in sicurezza e comfort.'
				},
				{
					icon: 'calendar_month',
					title: 'Da Maggio a Ottobre',
					text: 'Crociere settimanali e vacanze relax tra baie e isole.'
				}
			],
			contactTitle: 'Pronti a salpare?',
			contactText:
				'Scrivici per verificare le disponibilità e ricevere un preventivo per il tuo periodo.'
		},

		boat: {
			metaDesc:
				'Scheda tecnica, dotazioni, galleria fotografica e planimetria della Dufour 460 GL VERA: 14 metri, 4 cabine, 4 bagni.',
			lead: 'Elegante e spaziosa, ideale per crociere in famiglia o con amici, perfetta per vivere il mare in totale comfort.',
			specsTitle: 'Scheda tecnica',
			// `todo: true` = valore ancora da confermare, viene reso in corsivo grigio
			specs: [
				{ label: 'Modello', value: 'Dufour 460 Grand Large' },
				{ label: 'Lunghezza', value: '14 m' },
				{ label: 'Larghezza', value: '4,5 m' },
				{ label: 'Pescaggio', value: '2,2 m' },
				{ label: 'Cabine', value: '4' },
				{ label: 'Bagni', value: '4' },
				{ label: 'Posti letto', value: '10' },
				{ label: 'Anno', value: '2016' },
				{ label: 'Consumo carburante', value: '6 L/h' },
				{ label: 'Velocità di crociera', value: '8 kn' },
				{ label: 'Motore', value: '75 cv' },
				{ label: 'Porto base', value: 'Marina Alicante' }
			],
			aboardTitle: 'A bordo di VERA',
			p1: 'Questa barca a vela di 14 metri offre ampi spazi interni ed esterni, cabine confortevoli, grande pozzetto prendisole e ottime prestazioni sia a vela che a motore. La disposizione intelligente degli ambienti garantisce privacy e vivibilità anche per gruppi numerosi.',
			p2: 'Ideale per crociere settimanali e vacanze relax tra baie e isole.',
			equipmentTitle: 'Dotazioni e Planimetria',
			equipment: [
				{ title: 'Caratteristiche esterne', items: [
					'Bimini',
					'Tavolo da pranzo',
					'Impianto stereo',
					'Cuscini per il pozzetto',
					'Ponte in teak',
					'Plancetta di poppa',
					'Scaletta da bagno'
				] },
				{ title: 'Comfort a bordo', items: [
					'Acqua calda',
					'Lenzuola',
					'Asciugamani',
					'Presa USB'
				] },
				{ title: 'Apparecchiature di navigazione', items: [
					'Tender',
					'Motore per tender',
					'Elica di manovra',
					'Salpa ancora elettrico',
					'Pilota automatico',
					'GPS',
					'Ecoscandaglio',
					'Carte nautiche'
				] },
				{ title: 'Cucina', items: [
					'Frigorifero',
					'Forno/fornelli'
				] },
				{ title: 'Vele & attrezzature', items: [
					'Randa avvolgibile',
					'Genoa avvolgibile'
				] }
			],
			galleryOverline: 'Galleria',
			galleryTitle: 'Interni ed esterni',
			ctaTitle: 'Vuoi salire a bordo?',
			ctaText: 'Contattaci per disponibilità e preventivo.'
		},

		itineraries: {
			metaDesc:
				'Itinerari a vela a bordo di VERA, Dufour 460 GL: settimane e crociere relax tra baie e isole.',
			title: 'Itinerari',
			lead: 'Crociere settimanali e vacanze relax tra baie e isole. Ogni rotta viene adattata al meteo, al vento e ai desideri dell’equipaggio.',
			intro: [
				'Una settimana in barca a vela tra Ibiza e Formentera è il modo più bello per vivere le Isole Baleari dal mare, tra navigazione, baie trasparenti e soste nei luoghi più iconici dell’arcipelago. A bordo con skipper, ci lasciamo portare dal ritmo giusto dell’estate: bagni a Cala Comte, Ses Salines, Cala Saona e Cala Bassa, snorkeling in acque chiarissime, aperitivi nei chiringuiti di Formentera e qualche serata da vivere fino in fondo a Ibiza.',
				'È una vacanza pensata per chi cerca mare, leggerezza e condivisione, ma anche il piacere di vedere queste isole dal punto di vista migliore: quello della barca. Di giorno si vive all’aperto, tra sole, tuffi e relax; la sera si sceglie se restare in rada sotto le stelle o scendere a terra per respirare l’energia delle Baleari.',
				'L’itinerario non è mai fisso: viene deciso insieme allo skipper, quando presente a bordo, e in base alle condizioni meteo del momento.'
			],
			imgAlt: 'Vista su Formentera dalla barca',
			mapTitle: 'Le tappe possibili',
			islands: {
				title: 'Quante isole, in quanti giorni',
				p1: 'Per una settimana consigliamo di restare tra Ibiza e Formentera: distanze brevi, ancoraggi vicini e più tempo passato in acqua che in navigazione. Spingersi verso le altre isole è comunque possibile, ma cambia il ritmo della vacanza.',
				p2: 'Con due settimane o più si arriva con calma anche a Maiorca e Minorca, aggiungendo calette, porti e paesaggi completamente diversi.'
			},
			durationLabel: 'Durata',
			paceLabel: 'Ritmo',
			ask: 'Chiedi informazioni',
			// TODO: sostituire con gli itinerari reali
			items: [
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
			],
			note: 'Le rotte vengono definite insieme prima della partenza, tenendo conto delle condizioni meteo.'
		},

		harbour: {
			metaDesc:
				'Dove si imbarca su VERA: Marina Alicante, come arrivare e le regole del noleggio — settimana da sabato a sabato, cauzione ed extra.',
			title: 'Il Porto',
			lead: 'VERA parte da Alicante. Da qui si raggiungono Ibiza e Formentera: qui trovi dove ci si imbarca, come arrivare e le condizioni del noleggio.',
			addressLabel: 'Indirizzo',
			mapTitle: 'Dove trovi la barca',
			openInMaps: 'Apri in Google Maps',
			gettingThere: {
				title: 'Come arrivare',
				p1: 'L’aeroporto di Alicante-Elche (ALC) è a una ventina di minuti di auto dalla marina, con collegamenti diretti dalle principali città europee. In alternativa la stazione di Alicante Terminal è servita dai treni ad alta velocità.',
				p2: 'La marina è in centro città, con parcheggio nelle vicinanze e negozi per la spesa a pochi minuti a piedi. Il pontile e il posto barca esatti vengono comunicati alla conferma della prenotazione.'
			},
			rulesTitle: 'Come funziona il noleggio',
			rules: [
				{ label: 'Formula', value: 'Settimana da sabato a sabato' },
				{ label: 'Check-in', value: 'Sabato dalle 17:00' },
				{ label: 'Check-out', value: 'Sabato entro le 10:00' },
				{ label: 'Cauzione', key: 'deposit' },
				{
					label: 'Senza skipper',
					value: 'Patente nautica e certificato VHF del comandante'
				},
				{ label: 'Con skipper', value: 'Disponibile su richiesta, vedi extra' }
			],
			extrasTitle: 'Extra e servizi',
			extrasNote:
				'Prezzi per noleggio, da saldare alla consegna. La pulizia finale è obbligatoria, il resto è a scelta.',
			requiredLabel: 'obbligatoria',
			extras: [
				{ key: 'cleaning', label: 'Pulizia finale', required: true },
				{ key: 'skipper', label: 'Skipper' },
				{ key: 'earlyCheckin', label: 'Check-in anticipato' },
				{ key: 'tenderEngine', label: 'Motore del tender' }
			],
			note: 'Carburante, ormeggi fuori base e spesa di bordo restano a carico dell’equipaggio. Per qualsiasi dubbio sulle condizioni, scrivici prima di prenotare.'
		},

		about: {
			metaDesc: 'McFirst Charter: chi siamo e come lavoriamo a bordo di VERA, Dufour 460 GL.',
			title: 'Chi Siamo',
			heroTitle: 'Il mare, condiviso.',
			storyTitle: 'La nostra storia',
			// TODO: riscrivere con la storia reale di McFirst Charter
			p1: 'McFirst Charter nasce dalla passione per il mare e dal desiderio di condividerla. VERA, la nostra Dufour 460 Grand Large, è pensata per far vivere il mare in totale comfort a famiglie e gruppi di amici.',
			p2: 'Curiamo la barca nei dettagli e prepariamo ogni crociera insieme a chi salpa: rotta, tappe e ritmo si costruiscono sulle vostre esigenze, non su un pacchetto prestabilito.',
			skipperTitle: 'Il tuo skipper',
			// TODO: nome, anni di navigazione e certificazioni reali dello skipper
			skipperName: 'Lo skipper di VERA',
			skipperPoints: [
				{
					icon: 'directions_boat',
					title: 'Anni di navigazione',
					text: 'Miglia in Mediterraneo e lungo le coste delle Baleari: mare, venti e approdi conosciuti da vicino.'
				},
				{
					icon: 'verified_user',
					title: 'Patente e certificazioni',
					text: 'Abilitazioni nautiche in regola e attenzione costante alla sicurezza di chi è a bordo.'
				},
				{
					icon: 'map',
					title: 'Conoscenza dei luoghi',
					text: 'Cale riparate, ancoraggi tranquilli e tappe fuori dalle rotte più affollate.'
				}
			],
			valuesTitle: 'Come lavoriamo',
			values: [
				{
					icon: 'directions_boat',
					title: 'Barca pronta',
					text: 'Manutenzione, dotazioni di sicurezza e pulizia verificate prima di ogni partenza.'
				},
				{
					icon: 'map',
					title: 'Rotta condivisa',
					text: 'L’itinerario si decide insieme, adattandolo a meteo, vento e ritmo dell’equipaggio.'
				},
				{
					icon: 'support_agent',
					title: 'Sempre reperibili',
					text: 'Un riferimento a terra per qualsiasi necessità durante tutta la crociera.'
				}
			],
			ctaTitle: 'Parliamone',
			ctaText: 'Raccontaci quando vorresti partire e con quante persone.'
		},

		// chiave = nome del file (senza estensione) in static/img/<pagina>/
		photoAlts: {
			sailing: 'VERA in navigazione',
			cockpit: 'Pozzetto e prendisole',
			deck: 'Coperta',
			saloon: 'Quadrato interno',
			'at-anchor': 'VERA all’ancora',
			'master-cabin': 'Cabina armatoriale',
			'guest-cabin': 'Cabina ospiti',
			galley: 'Cucina',
			helm: 'Timoneria',
<<<<<<< HEAD
=======
			us: 'L’equipaggio di McFirst Charter',
			skipper: 'Lo skipper di VERA',
>>>>>>> about
			'deck-plan': 'Planimetria della Dufour 460 GL VERA'
		}
	},

	en: {
		tagline: 'Dufour 460 GL "VERA" — sailing holidays among bays and islands.',
		cta: 'Check availability',
		contacts: 'Contact',
		menu: 'Menu',
		language: 'Language',
		nav: [
			{ href: '/boat', label: 'The Boat' },
			{ href: '/itineraries', label: 'Itineraries' },
			{ href: '/harbour', label: 'The Harbour' },
			{ href: '/about', label: 'About Us' }
		],
		mailSubject: 'VERA availability request',
		claim: '14 metres of comfort to enjoy the sea with family or friends.',

		home: {
			metaDesc:
				'Charter the Dufour 460 GL VERA: 14 metres, 4 cabins, 4 heads. Weekly cruises, weekends and relaxing holidays among bays and islands.',
			heroCta: 'Discover the boat',
			introTitle: 'Space, comfort, sea',
			introP1:
				'Elegant and spacious, VERA is a Dufour 460 Grand Large made for cruising with family or friends, perfect for enjoying the sea in total comfort.',
			introP2:
				'Generous space inside and out, comfortable cabins, a large sun-deck cockpit and excellent performance under both sail and engine. The clever layout keeps privacy and liveability even with large groups on board.',
			introLink: 'Specifications and deck plan',
			aboardOverline: 'On board',
			aboardTitle: 'Everything you need',
			highlights: [
				{ icon: 'bed', title: '4 cabins', text: 'Comfortable doubles' },
				{ icon: 'shower', title: '4 heads', text: 'Indoor and outdoor showers' },
				{ icon: 'kitchen', title: 'Full galley', text: 'With refrigerator' },
				{ icon: 'explore', title: 'GPS and autopilot', text: 'Bow thruster' }
			],
			galleryOverline: 'Gallery',
			galleryTitle: 'VERA in pictures',
			galleryLink: 'See all photos',
			strengths: [
				{
					icon: 'groups',
					title: 'Ideal for groups',
					text: 'Four cabins and four heads: privacy and liveability even for large groups.'
				},
				{
					icon: 'sailing',
					title: 'Great performance',
					text: 'Lively behaviour under sail and engine alike, in safety and comfort.'
				},
				{
					icon: 'calendar_month',
					title: 'From May to October',
					text: 'Weekly cruises and relaxing holidays among bays and islands.'
				}
			],
			contactTitle: 'Ready to set sail?',
			contactText: 'Write to us to check availability and get a quote for your dates.'
		},

		boat: {
			metaDesc:
				'Specifications, equipment, photo gallery and deck plan of the Dufour 460 GL VERA: 14 metres, 4 cabins, 4 heads.',
			lead: 'Elegant and spacious, ideal for cruising with family or friends, perfect for enjoying the sea in total comfort.',
			specsTitle: 'Specifications',
			specs: [
				{ label: 'Model', value: 'Dufour 460 Grand Large' },
				{ label: 'Length', value: '14.15 m' },
				{ label: 'Beam', value: '4.5 m' },
				{ label: 'Draft', value: '2.2 m' },
				{ label: 'Cabins', value: '4' },
				{ label: 'Heads', value: '4' },
				{ label: 'Berths', value: '10' },
				{ label: 'Year', value: '2016' },
				{ label: 'Fuel consumption', value: '6 L/h' },
				{ label: 'Cruising speed', value: '8 kn' },
				{ label: 'Engine', value: '75 hp' },
				{ label: 'Home port', value: 'Marina Alicante' }
			],
			aboardTitle: 'On board VERA',
			p1: 'This 14-metre sailing yacht offers generous space inside and out, comfortable cabins, a large sun-deck cockpit and excellent performance under both sail and engine. The clever layout keeps privacy and liveability even with large groups on board.',
			p2: 'Ideal for weekly cruises, weekends and relaxing holidays among bays and islands.',
			equipmentTitle: 'Equipment and boat layout',
			equipment: [
				{ title: 'Exterior features', items: [
					'Bimini',
					'Dining table',
					'Stereo system',
					'Cockpit cushions',
					'Teak deck',
					'Swim platform',
					'Swimming ladder'
				] },
				{ title: 'On-board comfort', items: [
					'Hot water',
					'Bed linens',
					'Towels',
					'USB socket'
				] },
				{ title: 'Navigation equipment', items: [
					'Tender',
					'Outboard engine',
					'Bow thruster',
					'Electric windlass',
					'Autopilot',
					'GPS',
					'Depth sounder',
					'Nautical charts'
				] },
				{ title: 'Galley', items: [
					'Refrigerator',
					'Oven/stove'
				] },
				{ title: 'Sails & rigging', items: [
					'Furling mainsail',
					'Furling genoa'
				] }
			],
			galleryOverline: 'Gallery',
			galleryTitle: 'Inside and out',
			ctaTitle: 'Want to come aboard?',
			ctaText: 'Get in touch for availability and a quote.'
		},

		itineraries: {
			metaDesc:
				'Sailing itineraries aboard VERA, Dufour 460 GL: weeks and relaxing cruises among bays and islands.',
			title: 'Itineraries',
			lead: 'Weekly cruises and relaxing holidays among bays and islands. Every route is adapted to the weather, the wind and the crew’s wishes.',
			intro: [
				'A week sailing between Ibiza and Formentera is the finest way to experience the Balearic Islands from the sea: sailing, crystal-clear bays and stops at the most iconic spots of the archipelago. On board with a skipper, we let summer set the pace: swims at Cala Comte, Ses Salines, Cala Saona and Cala Bassa, snorkelling in the clearest water, sunset drinks at the chiringuitos of Formentera and the odd night out in Ibiza.',
				'It is a holiday for those looking for sea, lightness and good company, and also for the pleasure of seeing these islands from the best possible viewpoint: the boat. Days are spent outdoors, between sun, dives and downtime; in the evening you choose whether to stay at anchor under the stars or go ashore and soak up the energy of the Balearics.',
				'The itinerary is never fixed: it is decided together with the skipper, when on board, and according to the weather conditions of the moment.'
			],
			imgAlt: 'View of Formentera from the boat',
			mapTitle: 'Possible stops along the way',
			islands: {
				title: 'How many islands, in how many days',
				p1: 'For a one-week charter we suggest staying between Ibiza and Formentera: short hops, anchorages close to each other and more time in the water than under way. Heading to the other islands is possible too, but it changes the pace of the holiday.',
				p2: 'With two weeks or more you can comfortably reach Mallorca and Menorca as well, adding coves, harbours and completely different landscapes.'
			},
			durationLabel: 'Duration',
			paceLabel: 'Pace',
			ask: 'Ask for details',
			items: [
				{
					title: 'Weekend',
					duration: '2–3 days',
					pace: 'Relaxed',
					text: 'A short escape to the nearest bays, with swim stops and dinner on board or ashore.'
				},
				{
					title: 'A week among the islands',
					duration: '7 days',
					pace: 'Moderate',
					text: 'The classic route: short daily legs, anchorages in sheltered bays and a new island every day.'
				},
				{
					title: 'Tailor-made',
					duration: 'Your choice',
					pace: 'On request',
					text: 'Already have a route in mind? We plan it together around your dates and your crew.'
				}
			],
			note: 'Routes are agreed together before departure, taking the weather into account.'
		},

		harbour: {
			metaDesc:
				'Where you board VERA: Marina Alicante, how to get there and the charter terms — Saturday-to-Saturday weeks, deposit and extras.',
			title: 'The Harbour',
			lead: 'VERA sails from Alicante, the gateway to Ibiza and Formentera. Here is where you board, how to get there and how the charter works.',
			addressLabel: 'Address',
			mapTitle: 'Where to find the boat',
			openInMaps: 'Open in Google Maps',
			gettingThere: {
				title: 'Getting there',
				p1: 'Alicante-Elche airport (ALC) is about twenty minutes by car from the marina, with direct flights from most European cities. Alicante Terminal station is also served by high-speed trains.',
				p2: 'The marina sits in the city centre, with parking nearby and shops for provisioning a few minutes away on foot. The exact pontoon and berth are confirmed when the booking is.'
			},
			rulesTitle: 'How the charter works',
			rules: [
				{ label: 'Format', value: 'Weekly, Saturday to Saturday' },
				{ label: 'Check-in', value: 'Saturday from 17:00' },
				{ label: 'Check-out', value: 'Saturday by 10:00' },
				{ label: 'Security deposit', key: 'deposit' },
				{
					label: 'Bareboat',
					value: 'Skipper’s sailing licence and VHF certificate'
				},
				{ label: 'With skipper', value: 'Available on request, see extras' }
			],
			extrasTitle: 'Extras and services',
			extrasNote:
				'Prices per charter, payable at handover. Final cleaning is mandatory, everything else is optional.',
			requiredLabel: 'mandatory',
			extras: [
				{ key: 'cleaning', label: 'Final cleaning', required: true },
				{ key: 'skipper', label: 'Skipper' },
				{ key: 'earlyCheckin', label: 'Early check-in' },
				{ key: 'tenderEngine', label: 'Tender outboard engine' }
			],
			note: 'Fuel, mooring fees away from the home port and provisioning are down to the crew. If anything about the terms is unclear, write to us before booking.'
		},

		about: {
			metaDesc: 'McFirst Charter: who we are and how we work aboard VERA, Dufour 460 GL.',
			title: 'About Us',
			heroTitle: 'The sea, shared.',
			storyTitle: 'Our story',
			p1: 'McFirst Charter was born from a passion for the sea and the wish to share it. VERA, our Dufour 460 Grand Large, is set up to let families and groups of friends enjoy the sea in total comfort.',
			p2: 'We look after the boat down to the details and prepare every cruise together with those sailing: route, stops and pace are built around your needs, not around a fixed package.',
			skipperTitle: 'Your skipper',
			// TODO: nome, anni di navigazione e certificazioni reali dello skipper
			skipperName: 'VERA’s skipper',
			skipperPoints: [
				{
					icon: 'directions_boat',
					title: 'Years at sea',
					text: 'Miles across the Mediterranean and along the Balearic coasts: waters, winds and landfalls known first-hand.'
				},
				{
					icon: 'verified_user',
					title: 'Licence and certifications',
					text: 'Sailing qualifications in order and constant attention to the safety of everyone on board.'
				},
				{
					icon: 'map',
					title: 'Local knowledge',
					text: 'Sheltered coves, quiet anchorages and stops away from the busiest routes.'
				}
			],
			valuesTitle: 'How we work',
			values: [
				{
					icon: 'directions_boat',
					title: 'Boat ready',
					text: 'Maintenance, safety equipment and cleaning checked before every departure.'
				},
				{
					icon: 'map',
					title: 'A shared route',
					text: 'The itinerary is decided together, adapted to weather, wind and the crew’s pace.'
				},
				{
					icon: 'support_agent',
					title: 'Always reachable',
					text: 'A point of contact ashore for anything you need throughout the cruise.'
				}
			],
			ctaTitle: 'Let’s talk',
			ctaText: 'Tell us when you would like to sail and how many you are.'
		},

		photoAlts: {
			sailing: 'VERA under sail',
			cockpit: 'Cockpit and sun deck',
			deck: 'Deck',
			saloon: 'Saloon',
			'at-anchor': 'VERA at anchor',
			'master-cabin': 'Master cabin',
			'guest-cabin': 'Guest cabin',
			galley: 'Galley',
			helm: 'Helm station',
<<<<<<< HEAD
=======
			us: 'The McFirst Charter crew',
			skipper: 'VERA’s skipper',
>>>>>>> about
			'deck-plan': 'Deck plan of the Dufour 460 GL VERA'
		}
	},

	es: {
		tagline: 'Dufour 460 GL "VERA" — cruceros a vela entre calas e islas.',
		cta: 'Consultar disponibilidad',
		contacts: 'Contacto',
		menu: 'Menú',
		language: 'Idioma',
		nav: [
			{ href: '/boat', label: 'El Barco' },
			{ href: '/itineraries', label: 'Itinerarios' },
			{ href: '/harbour', label: 'El Puerto' },
			{ href: '/about', label: 'Quiénes Somos' }
		],
		mailSubject: 'Consulta de disponibilidad VERA',
		claim: '14 metros de confort para vivir el mar en familia o con amigos.',

		home: {
			metaDesc:
				'Alquiler del Dufour 460 GL VERA: 14 metros, 4 camarotes, 4 baños. Cruceros semanales, fines de semana y vacaciones relax entre calas e islas.',
			heroCta: 'Descubre el barco',
			introTitle: 'Espacio, confort, mar',
			introP1:
				'Elegante y espacioso, VERA es un Dufour 460 Grand Large ideal para cruceros en familia o con amigos, perfecto para vivir el mar con total confort.',
			introP2:
				'Amplios espacios interiores y exteriores, camarotes confortables, gran bañera solárium y excelentes prestaciones tanto a vela como a motor. La distribución inteligente garantiza privacidad y habitabilidad incluso con grupos numerosos.',
			introLink: 'Ficha técnica y plano',
			aboardOverline: 'A bordo',
			aboardTitle: 'Todo lo que necesitas',
			highlights: [
				{ icon: 'bed', title: '4 camarotes', text: 'Dobles y confortables' },
				{ icon: 'shower', title: '4 baños', text: 'Duchas interiores y exteriores' },
				{ icon: 'kitchen', title: 'Cocina completa', text: 'Con frigorífico' },
				{ icon: 'explore', title: 'GPS y piloto automático', text: 'Hélice de proa' }
			],
			galleryOverline: 'Galería',
			galleryTitle: 'VERA en imágenes',
			galleryLink: 'Ver todas las fotos',
			strengths: [
				{
					icon: 'groups',
					title: 'Ideal para grupos',
					text: 'Cuatro camarotes y cuatro baños: privacidad y habitabilidad incluso para grupos numerosos.'
				},
				{
					icon: 'sailing',
					title: 'Excelentes prestaciones',
					text: 'Comportamiento brillante tanto a vela como a motor, con seguridad y confort.'
				},
				{
					icon: 'calendar_month',
					title: 'De mayo a octubre',
					text: 'Cruceros semanales y vacaciones relax entre calas e islas.'
				}
			],
			contactTitle: '¿Listos para zarpar?',
			contactText:
				'Escríbenos para consultar la disponibilidad y recibir un presupuesto para tus fechas.'
		},

		boat: {
			metaDesc:
				'Ficha técnica, equipamiento, galería fotográfica y plano del Dufour 460 GL VERA: 14 metros, 4 camarotes, 4 baños.',
			lead: 'Elegante y espacioso, ideal para cruceros en familia o con amigos, perfecto para vivir el mar con total confort.',
			specsTitle: 'Ficha técnica',
			specs: [
				{ label: 'Modelo', value: 'Dufour 460 Grand Large' },
				{ label: 'Eslora', value: '14 m' },
				{ label: 'Manga', value: '4,5 m' },
				{ label: 'Calado', value: '2,2 m' },
				{ label: 'Camarotes', value: '4' },
				{ label: 'Baños', value: '4' },
				{ label: 'Plazas', value: '10' },
				{ label: 'Año', value: '2016' },
				{ label: 'Consumo de combustible', value: '6 L/h' },
				{ label: 'Velocidad de crucero', value: '8 kn' },
				{ label: 'Motor', value: '75 CV' },
				{ label: 'Puerto base', value: 'Marina Alicante' }
			],
			aboardTitle: 'A bordo de VERA',
			p1: 'Este velero de 14 metros ofrece amplios espacios interiores y exteriores, camarotes confortables, gran bañera solárium y excelentes prestaciones tanto a vela como a motor. La distribución inteligente garantiza privacidad y habitabilidad incluso con grupos numerosos.',
			p2: 'Ideal para cruceros semanales, fines de semana y vacaciones relax entre calas e islas.',
			equipmentTitle: 'Equipamiento y plano de distribución',
			equipment: [
				{ title: 'Características exteriores', items: [
					'Bimini',
					'Mesa de comedor',
					'Equipo de música',
					'Cojines para bañera',
					'Cubierta de teka',
					'Plataforma de baño',
					'Escalera de baño'
				] },
				{ title: 'Confort a bordo', items: [
					'Agua caliente',
					'Sábanas',
					'Toallas',
					'Toma USB'
				] },
				{ title: 'Equipamiento de navegación', items: [
					'Tender',
					'Motor para tender',
					'Hélice de proa',
					'Molinete eléctrico',
					'Piloto automático',
					'GPS',
					'Ecosonda',
					'Cartas náuticas'
				] },
				{ title: 'Cocina', items: [
					'Refrigerador',
					'Horno/placas'
				] },
				{ title: 'Velas y aparejos', items: [
					'Mayor enrollable',
					'Génova enrollable'
				] }
			],
			galleryOverline: 'Galería',
			galleryTitle: 'Interiores y exteriores',
			ctaTitle: '¿Quieres subir a bordo?',
			ctaText: 'Contáctanos para disponibilidad y presupuesto.'
		},

		itineraries: {
			metaDesc:
				'Itinerarios a vela a bordo de VERA, Dufour 460 GL: semanas y cruceros relax entre calas e islas.',
			title: 'Itinerarios',
			lead: 'Cruceros semanales y vacaciones relax entre calas e islas. Cada ruta se adapta al tiempo, al viento y a los deseos de la tripulación.',
			intro: [
				'Una semana en velero entre Ibiza y Formentera es la forma más bonita de vivir las Islas Baleares desde el mar, entre navegación, calas transparentes y paradas en los lugares más icónicos del archipiélago. A bordo con patrón, nos dejamos llevar por el ritmo del verano: baños en Cala Comte, Ses Salines, Cala Saona y Cala Bassa, snorkel en aguas clarísimas, aperitivos en los chiringuitos de Formentera y alguna noche para vivir a fondo en Ibiza.',
				'Son unas vacaciones pensadas para quien busca mar, ligereza y buena compañía, pero también el placer de ver estas islas desde el mejor punto de vista: el del barco. De día se vive al aire libre, entre sol, chapuzones y relax; por la noche se elige entre quedarse fondeados bajo las estrellas o bajar a tierra para respirar la energía de las Baleares.',
				'El itinerario nunca es fijo: se decide junto al patrón, cuando está a bordo, y según las condiciones meteorológicas del momento.'
			],
			imgAlt: 'Vista de Formentera desde el barco',
			mapTitle: 'Las paradas posibles',
			islands: {
				title: 'Cuántas islas, en cuántos días',
				p1: 'Para una semana recomendamos quedarse entre Ibiza y Formentera: distancias cortas, fondeos cercanos y más tiempo en el agua que navegando. Llegar a las demás islas también es posible, pero cambia el ritmo de las vacaciones.',
				p2: 'Con dos semanas o más se alcanzan con calma también Mallorca y Menorca, añadiendo calas, puertos y paisajes completamente distintos.'
			},
			durationLabel: 'Duración',
			paceLabel: 'Ritmo',
			ask: 'Pide información',
			items: [
				{
					title: 'Fin de semana',
					duration: '2–3 días',
					pace: 'Relax',
					text: 'Una escapada corta entre las calas más cercanas, con paradas de baño y cena a bordo o en puerto.'
				},
				{
					title: 'Una semana entre islas',
					duration: '7 días',
					pace: 'Medio',
					text: 'El itinerario clásico: etapas diarias cortas, fondeos en calas resguardadas y una isla nueva cada día.'
				},
				{
					title: 'A medida',
					duration: 'A elegir',
					pace: 'Bajo petición',
					text: '¿Ya tienes una ruta en mente? La construimos juntos según los días disponibles y la tripulación.'
				}
			],
			note: 'Las rutas se definen juntos antes de zarpar, teniendo en cuenta las condiciones meteorológicas.'
		},

		harbour: {
			metaDesc:
				'Dónde se embarca en VERA: Marina Alicante, cómo llegar y las condiciones del alquiler — semana de sábado a sábado, fianza y extras.',
			title: 'El Puerto',
			lead: 'VERA sale de Alicante, la puerta de entrada a Ibiza y Formentera. Aquí encontrarás dónde se embarca, cómo llegar y cómo funciona el alquiler.',
			addressLabel: 'Dirección',
			mapTitle: 'Dónde está el barco',
			openInMaps: 'Abrir en Google Maps',
			gettingThere: {
				title: 'Cómo llegar',
				p1: 'El aeropuerto de Alicante-Elche (ALC) está a unos veinte minutos en coche de la marina, con vuelos directos desde las principales ciudades europeas. La estación de Alicante Terminal también tiene trenes de alta velocidad.',
				p2: 'La marina está en el centro de la ciudad, con aparcamiento cerca y tiendas para hacer la compra a pocos minutos a pie. El pantalán y el amarre exactos se comunican al confirmar la reserva.'
			},
			rulesTitle: 'Cómo funciona el alquiler',
			rules: [
				{ label: 'Formato', value: 'Semana de sábado a sábado' },
				{ label: 'Check-in', value: 'Sábado a partir de las 17:00' },
				{ label: 'Check-out', value: 'Sábado antes de las 10:00' },
				{ label: 'Fianza', key: 'deposit' },
				{
					label: 'Sin patrón',
					value: 'Titulación náutica y certificado VHF del patrón'
				},
				{ label: 'Con patrón', value: 'Disponible bajo petición, ver extras' }
			],
			extrasTitle: 'Extras y servicios',
			extrasNote:
				'Precios por alquiler, a pagar en la entrega. La limpieza final es obligatoria, el resto es opcional.',
			requiredLabel: 'obligatoria',
			extras: [
				{ key: 'cleaning', label: 'Limpieza final', required: true },
				{ key: 'skipper', label: 'Patrón' },
				{ key: 'earlyCheckin', label: 'Check-in anticipado' },
				{ key: 'tenderEngine', label: 'Motor del auxiliar' }
			],
			note: 'El combustible, los amarres fuera de la base y la compra de a bordo corren a cargo de la tripulación. Si tienes dudas sobre las condiciones, escríbenos antes de reservar.'
		},

		about: {
			metaDesc: 'McFirst Charter: quiénes somos y cómo trabajamos a bordo de VERA, Dufour 460 GL.',
			title: 'Quiénes Somos',
			heroTitle: 'El mar, compartido.',
			storyTitle: 'Nuestra historia',
			p1: 'McFirst Charter nace de la pasión por el mar y del deseo de compartirla. VERA, nuestro Dufour 460 Grand Large, está pensado para que familias y grupos de amigos vivan el mar con total confort.',
			p2: 'Cuidamos el barco al detalle y preparamos cada crucero junto a quien zarpa: ruta, escalas y ritmo se construyen sobre vuestras necesidades, no sobre un paquete prefijado.',
			skipperTitle: 'Tu patrón',
			// TODO: nome, anni di navigazione e certificazioni reali dello skipper
			skipperName: 'El patrón de VERA',
			skipperPoints: [
				{
					icon: 'directions_boat',
					title: 'Años de navegación',
					text: 'Millas por el Mediterráneo y las costas de Baleares: aguas, vientos y fondeaderos conocidos de primera mano.'
				},
				{
					icon: 'verified_user',
					title: 'Titulación y certificaciones',
					text: 'Titulaciones náuticas en regla y atención constante a la seguridad de quien va a bordo.'
				},
				{
					icon: 'map',
					title: 'Conocimiento de la zona',
					text: 'Calas resguardadas, fondeaderos tranquilos y escalas fuera de las rutas más concurridas.'
				}
			],
			valuesTitle: 'Cómo trabajamos',
			values: [
				{
					icon: 'directions_boat',
					title: 'Barco listo',
					text: 'Mantenimiento, equipo de seguridad y limpieza verificados antes de cada salida.'
				},
				{
					icon: 'map',
					title: 'Ruta compartida',
					text: 'El itinerario se decide juntos, adaptándolo al tiempo, al viento y al ritmo de la tripulación.'
				},
				{
					icon: 'support_agent',
					title: 'Siempre localizables',
					text: 'Una referencia en tierra para cualquier necesidad durante todo el crucero.'
				}
			],
			ctaTitle: 'Hablemos',
			ctaText: 'Cuéntanos cuándo quieres zarpar y cuántos sois.'
		},

		photoAlts: {
			sailing: 'VERA navegando',
			cockpit: 'Bañera y solárium',
			deck: 'Cubierta',
			saloon: 'Salón',
			'at-anchor': 'VERA fondeado',
			'master-cabin': 'Camarote armador',
			'guest-cabin': 'Camarote de invitados',
			galley: 'Cocina',
			helm: 'Puesto de gobierno',
<<<<<<< HEAD
=======
			us: 'La tripulación de McFirst Charter',
			skipper: 'El patrón de VERA',
>>>>>>> about
			'deck-plan': 'Plano del Dufour 460 GL VERA'
		}
	}
};
