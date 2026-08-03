<script>
	import { site, harbour, charter } from '$lib/site';
	import { reveal } from '$lib/reveal';

	let { data } = $props();
	const t = $derived(data.t);
	const h = $derived(data.t.harbour);

	// La marina si cambia in site.js: mappa e link seguono.
	const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(harbour.mapsQuery)}`;
</script>

<svelte:head>
	<title>{h.title} — {harbour.marina} | {site.name}</title>
	<meta name="description" content={h.metaDesc} />
</svelte:head>

<main class="mx-auto w-full max-w-site px-5 pt-30 pb-30 md:px-16">
	<section class="mx-auto mb-20 max-w-3xl text-center">
		<h1 class="mb-6 font-display text-display-sm text-primary md:text-display">{h.title}</h1>
		<p class="text-body-lg text-on-surface-variant">{h.lead}</p>
	</section>

	<!-- Mappa + come arrivare -->
	<section use:reveal class="mb-20 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
		<figure class="open-frame">
			<iframe
				class="aspect-4/3 w-full rounded border border-outline-variant/30"
				src="{mapsUrl}&output=embed"
				title={h.mapTitle}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<figcaption class="mt-4 text-caps text-primary-container/60 uppercase">{h.mapTitle}</figcaption>
		</figure>
		<div class="settle">
			<span class="mb-3 block text-caps text-primary-container/60 uppercase">{h.addressLabel}</span>
			<p class="mb-2 font-display text-headline-sm text-primary">{harbour.marina}</p>
			<p class="mb-6 text-body text-on-surface-variant">{harbour.address}</p>
			<a
				class="mb-10 inline-flex items-center gap-2 text-label text-primary underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
				href={mapsUrl}
				target="_blank"
				rel="noopener"
			>
				<span class="material-symbols-outlined text-xl">location_on</span>
				{h.openInMaps}
			</a>

			<h2 class="mb-6 font-display text-headline-sm text-primary">{h.gettingThere.title}</h2>
			<p class="mb-6 text-body text-on-surface-variant">{h.gettingThere.p1}</p>
			<p class="text-body text-on-surface-variant">{h.gettingThere.p2}</p>
		</div>
	</section>

	<!-- Regole + extra -->
	<section use:reveal class="mb-20 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
		<div class="rounded border border-outline-variant/30 bg-surface-container-lowest p-8">
			<h2
				class="hatch-text mb-8 flex items-center gap-2 border-b border-tertiary-fixed-dim pb-4 font-display text-headline-sm text-primary"
			>
				<span class="material-symbols-outlined text-tertiary-fixed-dim">event_available</span>
				{h.rulesTitle}
			</h2>
			<dl class="grid grid-cols-1 gap-6">
				{#each h.rules as rule, i (rule.label)}
					{#if i > 0}
						<div class="tick h-px bg-outline-variant/20"></div>
					{/if}
					<div class="tick">
						<dt class="mb-1 text-caps text-primary-container/60 uppercase">{rule.label}</dt>
						<dd class="text-body {rule.todo ? 'text-outline italic' : 'text-primary'}">
							{rule.key ? `€${charter[rule.key]}` : rule.value}
						</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="rounded border border-outline-variant/30 bg-surface-bright p-8">
			<h2
				class="hatch-text mb-8 flex items-center gap-2 border-b border-tertiary-fixed-dim pb-4 font-display text-headline-sm text-primary"
			>
				<span class="material-symbols-outlined text-tertiary-fixed-dim">receipt_long</span>
				{h.extrasTitle}
			</h2>
			<ul class="mb-8 space-y-4">
				{#each h.extras as extra (extra.key)}
					<li class="tick flex items-baseline justify-between gap-4 text-body">
						<span class="text-on-surface-variant">
							{extra.label}
							{#if extra.required}
								<span class="text-caps text-tertiary-fixed-dim uppercase">({h.requiredLabel})</span>
							{/if}
						</span>
						<span class="shrink-0 text-primary">€{charter[extra.key]}</span>
					</li>
				{/each}
			</ul>
			<p class="settle text-body text-on-surface-variant">{h.extrasNote}</p>
		</div>
	</section>

	<div
		class="mt-20 flex flex-col items-start justify-between gap-6 border-t border-outline-variant/30 pt-12 md:flex-row md:items-center"
	>
		<p class="max-w-xl text-body-lg text-on-surface-variant">{h.note}</p>
		<a
			class="inline-flex shrink-0 items-center gap-2 rounded bg-primary-container px-8 py-4 text-label text-on-primary transition-opacity hover:opacity-90"
			href="/{data.lang}/#contact"
		>
			{t.cta}
			<span class="material-symbols-outlined text-xl">arrow_forward</span>
		</a>
	</div>
</main>
