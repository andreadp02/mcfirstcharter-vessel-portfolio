<script>
	import { site, boat, harbour, fees, seasons } from '$lib/site';
	import { reveal } from '$lib/reveal';

	let { data } = $props();
	const t = $derived(data.t);
	const c = $derived(data.t.charter);

	// La marina si cambia in site.js: mappa e link seguono.
	const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(harbour.mapsQuery)}`;

	// `always`: in italiano e spagnolo il separatore delle migliaia parte solo da cinque
	// cifre (CLDR minimumGroupingDigits), e "3690" su un prezzo si legge male.
	const eur = (/** @type {number} */ n) => `€${n.toLocaleString(data.lang, { useGrouping: 'always' })}`;

	// ponytail: anno fisso, si stampano solo giorno e mese. Costruttore locale e non
	// `new Date('2024-06-01')`, che è UTC e può slittare di un giorno.
	const day = (/** @type {string} */ md) => {
		const [m, d] = md.split('-').map(Number);
		return new Date(2024, m - 1, d).toLocaleDateString(data.lang, {
			day: 'numeric',
			month: 'long'
		});
	};
</script>

<svelte:head>
	<title>{c.title} — {boat.name} | {site.name}</title>
	<meta name="description" content={c.metaDesc} />
</svelte:head>

<main class="mx-auto w-full max-w-site px-5 pt-30 pb-30 md:px-16">
	<section class="mx-auto mb-20 max-w-3xl text-center">
		<h1 class="mb-6 font-display text-display-sm text-primary md:text-display">{c.title}</h1>
		<p class="text-body-lg text-on-surface-variant">{c.lead}</p>
	</section>

	<!-- Tariffe per periodo -->
	<section use:reveal class="mb-20">
		<div class="rounded border border-outline-variant/30 bg-surface-container-lowest p-8">
			<h2
				class="hatch-text mb-8 flex items-center gap-2 border-b border-tertiary-fixed-dim pb-4 font-display text-headline-sm text-primary"
			>
				<span class="material-symbols-outlined text-tertiary-fixed-dim">payments</span>
				{c.ratesTitle}
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
				{#each seasons as season (season.key)}
					<div class="tick">
						<span class="mb-3 block text-caps text-primary-container/60 uppercase">
							{c.seasons[season.key]}
						</span>
						<p class="mb-3 flex items-baseline gap-2">
							<span class="font-display text-headline text-primary">{eur(season.week)}</span>
							<span class="text-body text-on-surface-variant">{c.perWeek}</span>
						</p>
						<p class="text-body text-on-surface-variant">
							{#each season.ranges as [from, to], i (from)}{i > 0 ? ', ' : ''}{day(from)} – {day(
									to
								)}{/each}
						</p>
					</div>
				{/each}
			</div>
		</div>
		<p class="settle mt-6 max-w-3xl text-body text-on-surface-variant">{c.ratesNote}</p>
	</section>

	<!-- Regole + extra -->
	<section use:reveal class="mb-20 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
		<div class="rounded border border-outline-variant/30 bg-surface-container-lowest p-8">
			<h2
				class="hatch-text mb-8 flex items-center gap-2 border-b border-tertiary-fixed-dim pb-4 font-display text-headline-sm text-primary"
			>
				<span class="material-symbols-outlined text-tertiary-fixed-dim">event_available</span>
				{c.rulesTitle}
			</h2>
			<dl class="grid grid-cols-1 gap-6">
				{#each c.rules as rule, i (rule.label)}
					{#if i > 0}
						<div class="tick h-px bg-outline-variant/20"></div>
					{/if}
					<div class="tick">
						<dt class="mb-1 text-caps text-primary-container/60 uppercase">{rule.label}</dt>
						<dd class="text-body {rule.todo ? 'text-outline italic' : 'text-primary'}">
							{rule.key ? eur(fees[rule.key]) : rule.value}
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
				{c.extrasTitle}
			</h2>
			<ul class="mb-8 space-y-4">
				{#each c.extras as extra (extra.key)}
					<li class="tick flex items-baseline justify-between gap-4 text-body">
						<span class="text-on-surface-variant">
							{extra.label}
							{#if extra.required}
								<span class="text-caps text-tertiary-fixed-dim uppercase">({c.requiredLabel})</span>
							{/if}
						</span>
						<span class="shrink-0 text-primary">{eur(fees[extra.key])}</span>
					</li>
				{/each}
			</ul>
			<p class="settle text-body text-on-surface-variant">{c.extrasNote}</p>
		</div>
	</section>

	<!-- Mappa + come arrivare -->
	<section use:reveal class="mb-20 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
		<figure class="open-frame">
			<iframe
				class="aspect-4/3 w-full rounded border border-outline-variant/30"
				src="{mapsUrl}&output=embed"
				title={c.mapTitle}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<figcaption class="mt-4 text-caps text-primary-container/60 uppercase">{c.mapTitle}</figcaption>
		</figure>
		<div class="settle">
			<span class="mb-3 block text-caps text-primary-container/60 uppercase">{c.addressLabel}</span>
			<p class="mb-2 font-display text-headline-sm text-primary">{harbour.marina}</p>
			<p class="mb-6 text-body text-on-surface-variant">{harbour.address}</p>
			<a
				class="mb-10 inline-flex items-center gap-2 text-label text-primary underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
				href={mapsUrl}
				target="_blank"
				rel="noopener"
			>
				<span class="material-symbols-outlined text-xl">location_on</span>
				{c.openInMaps}
			</a>

			<h2 class="mb-6 font-display text-headline-sm text-primary">{c.gettingThere.title}</h2>
			<p class="mb-6 text-body text-on-surface-variant">{c.gettingThere.p1}</p>
			<p class="text-body text-on-surface-variant">{c.gettingThere.p2}</p>
		</div>
	</section>

	<p
		class="mt-20 border-t border-outline-variant/30 pt-12 text-body-lg text-on-surface-variant"
	>
		{c.note}
	</p>

	<!-- Contatti: la destinazione di ogni "richiedi disponibilità" del sito.
	     scroll-mt tiene il titolo sotto la navbar fissa quando si arriva da #contact. -->
	<section id="contact" use:reveal class="mt-20 scroll-mt-28">
		<div
			class="flex flex-col items-center justify-center rounded bg-primary-container px-8 py-24 text-center"
		>
			<h2 class="hatch-text mb-6 font-display text-headline text-on-primary">{c.contactTitle}</h2>
			<p class="settle mx-auto mb-10 max-w-2xl text-body-lg text-primary-fixed-dim">
				{c.contactText}
			</p>
			<div class="settle flex flex-col gap-4 sm:flex-row">
				<a
					class="inline-flex items-center gap-2 rounded bg-on-primary px-8 py-4 text-label text-primary-container transition-colors hover:bg-secondary-fixed"
					href="mailto:{site.email}?subject={encodeURIComponent(t.mailSubject)}"
				>
					<span class="material-symbols-outlined text-xl">mail</span>
					{site.email}
				</a>
				<a
					class="inline-flex items-center gap-2 rounded border border-on-primary/40 px-8 py-4 text-label text-on-primary transition-colors hover:bg-on-primary/10"
					href="https://wa.me/{site.whatsapp}"
				>
					<span class="material-symbols-outlined text-xl">chat</span>
					WhatsApp
				</a>
			</div>
		</div>
	</section>
</main>
