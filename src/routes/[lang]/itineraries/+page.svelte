<script>
	import { site } from '$lib/site';

	let { data } = $props();
	const t = $derived(data.t);
	const it = $derived(data.t.itineraries);
</script>

<svelte:head>
	<title>{it.title} | {site.name}</title>
	<meta name="description" content={it.metaDesc} />
</svelte:head>

<main class="mx-auto w-full max-w-site px-5 pt-30 pb-30 md:px-16">
	<section class="mx-auto mb-20 max-w-3xl text-center">
		<h1 class="mb-6 font-display text-display-sm text-primary md:text-display">{it.title}</h1>
		<p class="text-body-lg text-on-surface-variant">{it.lead}</p>
	</section>

	<section class="mb-20 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
		<div>
			{#each it.intro as p (p)}
				<p class="mb-6 text-body text-on-surface-variant">{p}</p>
			{/each}
		</div>
		<img src="/img/itineraries/view-formentera.jpg" alt={it.imgAlt} />
	</section>

	<section class="mb-20 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
		<figure>
			<iframe
				class="aspect-4/3 w-full rounded border border-outline-variant/30"
				src="https://www.google.com/maps/d/embed?mid=1Mx5p22xHCd6mHyofnwz9KESTz0q2saE&ll=38.83382829369669%2C1.3732196999999946&z=11"
				title={it.mapTitle}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<figcaption class="mt-4 text-caps text-primary-container/60 uppercase">{it.mapTitle}</figcaption>
		</figure>
		<div>
			<h2 class="mb-6 font-display text-headline-sm text-primary">{it.islands.title}</h2>
			<p class="mb-6 text-body text-on-surface-variant">{it.islands.p1}</p>
			<p class="text-body text-on-surface-variant">{it.islands.p2}</p>
		</div>
	</section>

	<div
		class="mt-20 flex flex-col items-start justify-between gap-6 border-t border-outline-variant/30 pt-12 md:flex-row md:items-center"
	>
		<p class="max-w-xl text-body-lg text-on-surface-variant">{it.note}</p>
		<a
			class="inline-flex items-center gap-2 rounded bg-primary-container px-8 py-4 text-label text-on-primary transition-opacity hover:opacity-90"
			href="/{data.lang}/charter#contact"
		>
			{t.cta}
			<span class="material-symbols-outlined text-xl">arrow_forward</span>
		</a>
	</div>
</main>
