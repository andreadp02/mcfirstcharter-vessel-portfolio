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

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		{#each it.items as item (item.title)}
			<article
				class="flex flex-col rounded border border-outline-variant/30 bg-surface-container-lowest p-8"
			>
				<span class="material-symbols-outlined mb-6 text-tertiary-fixed-dim">radio_button_checked</span>
				<h2 class="mb-4 font-display text-headline-sm text-primary">{item.title}</h2>
				<div class="mb-6 flex gap-6">
					<div>
						<span class="mb-1 block text-caps text-primary-container/60 uppercase"
							>{it.durationLabel}</span
						>
						<span class="text-body">{item.duration}</span>
					</div>
					<div class="w-px bg-outline-variant/30"></div>
					<div>
						<span class="mb-1 block text-caps text-primary-container/60 uppercase"
							>{it.paceLabel}</span
						>
						<span class="text-body">{item.pace}</span>
					</div>
				</div>
				<p class="grow text-body text-on-surface-variant">{item.text}</p>
				<a
					class="mt-8 w-max border-b border-transparent pb-1 text-label text-secondary transition-colors hover:border-secondary"
					href="/{data.lang}/#contact">{it.ask}</a
				>
			</article>
		{/each}
	</div>

	<div
		class="mt-20 flex flex-col items-start justify-between gap-6 border-t border-outline-variant/30 pt-12 md:flex-row md:items-center"
	>
		<p class="max-w-xl text-body-lg text-on-surface-variant">{it.note}</p>
		<a
			class="inline-flex items-center gap-2 rounded bg-primary-container px-8 py-4 text-label text-on-primary transition-opacity hover:opacity-90"
			href="/{data.lang}/#contact"
		>
			{t.cta}
			<span class="material-symbols-outlined text-xl">arrow_forward</span>
		</a>
	</div>
</main>
