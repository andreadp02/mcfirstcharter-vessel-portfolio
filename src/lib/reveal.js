// Comparsa allo scorrimento del mockup "immersive reveal".
// L'elemento parte visibile: la classe che lo nasconde viene messa da qui, così
// senza JS (o con animazioni ridotte) la pagina resta leggibile.
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
				{ threshold: 0.15 }
			);

/** @type {import('svelte/action').Action} */
export function reveal(node) {
	// dove il browser sa fare le scroll-driven animations il movimento lo detta
	// il CSS (vedi src/routes/layout.css): questo resta solo come ripiego.
	if (
		!observer ||
		CSS.supports('animation-timeline: view()') ||
		matchMedia('(prefers-reduced-motion: reduce)').matches
	)
		return;

	node.classList.add('reveal');
	observer.observe(node);

	return { destroy: () => observer.unobserve(node) };
}
