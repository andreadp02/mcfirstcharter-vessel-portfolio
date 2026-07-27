<script>
	import { site, itineraries } from '$lib/site';
</script>

<svelte:head>
	<title>Itinerari | {site.name}</title>
	<meta
		name="description"
		content="Itinerari a vela a bordo di VERA, Dufour 460 GL: weekend, settimane e crociere relax tra baie e isole."
	/>
</svelte:head>

<main class="mx-auto w-full max-w-site px-5 pt-30 pb-30 md:px-16">
	<section class="mx-auto mb-20 max-w-3xl text-center">
		<h1 class="mb-6 font-display text-display-sm text-primary md:text-display">Itinerari</h1>
		<p class="text-body-lg text-on-surface-variant">
			Crociere settimanali, weekend e vacanze relax tra baie e isole. Ogni rotta viene adattata al
			meteo, al vento e ai desideri dell’equipaggio.
		</p>
	</section>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		{#each itineraries as it (it.title)}
			<article
				class="flex flex-col rounded border border-outline-variant/30 bg-surface-container-lowest p-8"
			>
				<span class="material-symbols-outlined mb-6 text-tertiary-fixed-dim">radio_button_checked</span>
				<h2 class="mb-4 font-display text-headline-sm text-primary">{it.title}</h2>
				<div class="mb-6 flex gap-6">
					<div>
						<span class="mb-1 block text-caps text-primary-container/60 uppercase">Durata</span>
						<span class="text-body">{it.duration}</span>
					</div>
					<div class="w-px bg-outline-variant/30"></div>
					<div>
						<span class="mb-1 block text-caps text-primary-container/60 uppercase">Ritmo</span>
						<span class="text-body">{it.pace}</span>
					</div>
				</div>
				<p class="grow text-body text-on-surface-variant">{it.text}</p>
				<a
					class="mt-8 w-max border-b border-transparent pb-1 text-label text-secondary transition-colors hover:border-secondary"
					href="/#contatti">Chiedi informazioni</a
				>
			</article>
		{/each}
	</div>

	<div
		class="mt-20 flex flex-col items-start justify-between gap-6 border-t border-outline-variant/30 pt-12 md:flex-row md:items-center"
	>
		<p class="max-w-xl text-body-lg text-on-surface-variant">
			Le rotte vengono definite insieme prima della partenza, tenendo conto delle condizioni meteo.
		</p>
		<a
			class="inline-flex items-center gap-2 rounded bg-primary-container px-8 py-4 text-label text-on-primary transition-opacity hover:opacity-90"
			href="/#contatti"
		>
			Richiedi disponibilità
			<span class="material-symbols-outlined text-xl">arrow_forward</span>
		</a>
	</div>
</main>
