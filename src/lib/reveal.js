// Comparsa allo scorrimento del mockup "immersive reveal".
// L'elemento parte visibile: la classe che lo nasconde viene messa da qui, così
// senza JS (o con animazioni ridotte) la pagina resta leggibile.
// Il testo non usa `animation-timeline: view()`: dentro un antenato con
// overflow hidden (la fascia a tutta larghezza, i ritagli delle foto) quel
// timeline si aggancia allo scrollport sbagliato e resta fermo. L'observer
// invece funziona ovunque.
// ponytail: un solo observer per tutta la pagina, gli elementi si smarcano da soli.

const observer =
	typeof IntersectionObserver === 'undefined'
		? null
		: new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (!entry.isIntersecting) continue;
						entry.target.classList.add('reveal-in');
						observer?.unobserve(entry.target);
					}
				},
				// scatta quando la sezione ha superato il bordo basso della finestra,
				// non appena lo sfiora: il movimento va visto dove si legge
				{ rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
			);

/** @type {import('svelte/action').Action} */
export function reveal(node) {
	if (!observer || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	node.classList.add('reveal');
	observer.observe(node);

	return { destroy: () => observer.unobserve(node) };
}
