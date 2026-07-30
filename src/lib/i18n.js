// Localized equipment catalog and default-checked items (image + existing equipment)
export const equipmentCatalog = {
	it: [
		{ title: 'Caratteristiche esterne', items: [
			'Bimini',
			'Doccia sul ponte',
			'Tavolo da pranzo',
			'Impianto stereo',
			'Cuscini per il pozzetto',
			'Ponte in teak',
			'Plancetta di poppa',
			'Scaletta da bagno',
			'Rete di sicurezza'
		] },
		{ title: 'Comfort a bordo', items: [
			'Acqua calda',
			'Dissalatore',
			'Aria condizionata',
			'Ventilatori',
			'Riscaldamento',
			'Lavatrice',
			'WC elettrico',
			'Lenzuola',
			'Asciugamani',
			'Teli da spiaggia',
			'Wi-Fi',
			'Presa USB',
			'TV'
		] },
		{ title: 'Apparecchiature di navigazione', items: [
			'Tender',
			'Motore per tender',
			'Elica di manovra',
			'Salpa ancora elettrico',
			'Winch elettrici',
			'Pilota automatico',
			'GPS',
			'Ecoscandaglio',
			'VHF',
			'Telefono satellitare',
			'Carte nautiche'
		] },
		{ title: 'Cucina', items: [
			'Frigorifero',
			'Congelatore',
			'Forno/fornelli',
			'Barbecue',
			'Microonde',
			'Macchina del caffè',
			'Macchina per il ghiaccio',
			'Borsa per il ghiaccio',
			'Lavapiatti'
		] },
		{ title: 'Svago', items: [
			'Tavola da paddle',
			'Kayak',
			'Maschera e boccaglio',
			'Attrezzatura da pesca',
			'Attrezzatura per immersioni subacquee'
		] },
		{ title: 'Vele & attrezzature', items: [
			'Randa steccata',
			'Randa avvolgibile',
			'Spinnaker',
			'Gennaker',
			'Genoa avvolgibile',
			'Vele da regata'
		] }
	],
	en: [
		{ title: 'Exterior features', items: [
			'Bimini',
			'Deck shower',
			'Dining table',
			'Stereo system',
			'Cockpit cushions',
			'Teak deck',
			'Swim platform',
			'Swimming ladder',
			'Safety net'
		] },
		{ title: 'On-board comfort', items: [
			'Hot water',
			'Watermaker',
			'Air conditioning',
			'Fans',
			'Heating',
			'Washing machine',
			'Electric toilet',
			'Bed linens',
			'Towels',
			'Beach towels',
			'Wi‑Fi',
			'USB socket',
			'TV'
		] },
		{ title: 'Navigation equipment', items: [
			'Tender',
			'Outboard engine',
			'Bow thruster',
			'Electric windlass',
			'Electric winches',
			'Autopilot',
			'GPS',
			'Depth sounder',
			'VHF',
			'Satellite phone',
			'Nautical charts'
		] },
		{ title: 'Galley', items: [
			'Refrigerator',
			'Freezer',
			'Oven/stove',
			'Barbecue',
			'Microwave',
			'Coffee maker',
			'Ice maker',
			'Cooler bag',
			'Dishwasher'
		] },
		{ title: 'Leisure', items: [
			'Paddle board',
			'Kayak',
			'Snorkel gear',
			'Fishing gear',
			'Diving equipment'
		] },
		{ title: 'Sails & rigging', items: [
			'Full-batten mainsail',
			'Furling mainsail',
			'Spinnaker',
			'Gennaker',
			'Furling genoa',
			'Racing sails'
		] }
	],
	es: [
		{ title: 'Características exteriores', items: [
			'Bimini',
			'Ducha en cubierta',
			'Mesa de comedor',
			'Equipo de música',
			'Cojines para bañera',
			'Cubierta de teka',
			'Plataforma de baño',
			'Escalera de baño',
			'Red de seguridad'
		] },
		{ title: 'Confort a bordo', items: [
			'Agua caliente',
			'Desalinizador',
			'Aire acondicionado',
			'Ventiladores',
			'Calefacción',
			'Lavadora',
			'WC eléctrico',
			'Sábanas',
			'Toallas',
			'Toallas de playa',
			'Wi‑Fi',
			'Toma USB',
			'TV'
		] },
		{ title: 'Equipamiento de navegación', items: [
			'Tender',
			'Motor para tender',
			'Hélice de proa',
			'Molinete eléctrico',
			'Winches eléctricos',
			'Piloto automático',
			'GPS',
			'Ecosonda',
			'VHF',
			'Teléfono satelital',
			'Cartas náuticas'
		] },
		{ title: 'Cocina', items: [
			'Refrigerador',
			'Congelador',
			'Horno/placas',
			'Barbacoa',
			'Microondas',
			'Cafetera',
			'Máquina de hielo',
			'Bolsa para hielo',
			'Lavavajillas'
		] },
		{ title: 'Ocio', items: [
			'Tabla de paddle',
			'Kayak',
			'Máscara y tubo',
			'Equipo de pesca',
			'Equipo de buceo'
		] },
		{ title: 'Velas y aparejos', items: [
			'Mayor con doctor',
			'Mayor enrollable',
			'Spinnaker',
			'Gennaker',
			'Génova enrollable',
			'Velas de regata'
		] }
	]
};

// Items that should appear checked by default (those visible as checked in the provided image
// plus items already present in boat.equipment). Keep lists localized so comparison is straightforward.
export const equipmentChecked = {
	it: [
		'Bimini',
		'Tavolo da pranzo',
		'Impianto stereo',
		'Cuscini per il pozzetto',
		'Ponte in teak',
		'Plancetta di poppa',
		'Scaletta da bagno',
		'Acqua calda',
		'Lenzuola',
		'Asciugamani',
		'Presa USB',
		'Tender',
		'Motore per tender',
		'Elica di manovra',
		'Salpa ancora elettrico',
		'Pilota automatico',
		'GPS',
		'Ecoscandaglio',
		'Carte nautiche',
		'Frigorifero',
		'Forno/fornelli',
		'Randa avvolgibile',
		'Genoa avvolgibile'
	],
	en: [
		'Bimini',
		'Dining table',
		'Stereo system',
		'Cockpit cushions',
		'Teak deck',
		'Swim platform',
		'Swimming ladder',
		'Hot water',
		'Bed linens',
		'Towels',
		'USB socket',
		'Tender',
		'Outboard engine',
		'Bow thruster',
		'Electric windlass',
		'Autopilot',
		'GPS',
		'Depth sounder',
		'Nautical charts',
		'Refrigerator',
		'Oven/stove',
		'Furling mainsail',
		'Furling genoa'
	],
	es: [
		'Bimini',
		'Mesa de comedor',
		'Equipo de música',
		'Cojines para bañera',
		'Cubierta de teka',
		'Plataforma de baño',
		'Escalera de baño',
		'Agua caliente',
		'Sábanas',
		'Toallas',
		'Toma USB',
		'Tender',
		'Motor para tender',
		'Hélice de proa',
		'Molinete eléctrico',
		'Piloto automático',
		'GPS',
		'Ecosonda',
		'Cartas náuticas',
		'Refrigerador',
		'Horno/placas',
		'Mayor enrollable',
		'Génova enrollable'
	]
};
