<script>
	import Img from '$lib/Img.svelte';
	import { site, boat } from '$lib/site';
	import { reveal } from '$lib/reveal';

	let { data } = $props();
	const t = $derived(data.t);
	const b = $derived(data.t.boat);

	// impaginazione del mockup "immersive reveal": una foto per sezione,
	// il resto nella griglia finale. Vedi static/img/README.md.
	const p = $derived(data.photos.boat);
</script>

<svelte:head>
	<title>{t.nav[0].label} — {boat.name}, {boat.model} | {site.name}</title>
	<meta name="description" content={b.metaDesc} />
</svelte:head>

<main class="pt-24 pb-30">
	<!-- Hero -->
	<section class="mx-auto mb-30 max-w-site px-5 pt-8 md:px-16">
		<div class="hero-lede mx-auto mb-12 max-w-3xl text-center">
			<span class="mb-4 block text-caps text-primary-container/60 uppercase">{boat.model}</span>
			<h1 class="mb-6 font-display text-display-sm text-primary md:text-display">{boat.name}</h1>
			<p class="text-body-lg text-on-surface-variant">{b.lead}</p>
		</div>
		<div
			class="hero-open drift group h-[400px] overflow-hidden rounded bg-surface-variant md:h-[600px]"
		>
			<Img
				src={p.hero.src}
				alt={p.hero.alt}
				loading="eager"
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			/>
		</div>
	</section>

	<!-- Racconto + foto -->
	<section
		use:reveal
		class="mx-auto mb-30 grid max-w-site grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:px-16"
	>
		<div class="md:col-span-7 md:pr-12">
			<h2 class="hatch-text mb-8 font-display text-headline text-primary">{b.aboardTitle}</h2>
			<div class="settle space-y-6 text-body-lg leading-relaxed text-on-surface-variant">
				<p>{b.p1}</p>
				<p>{b.p2}</p>
			</div>
		</div>
		<div
			class="open-frame drift group mt-8 h-[400px] overflow-hidden rounded bg-surface-variant md:col-span-5 md:mt-0"
		>
			<Img
				src={p.aboard.src}
				alt={p.aboard.alt}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			/>
		</div>
	</section>

	<!-- Scheda tecnica + foto -->
	<section
		use:reveal
		class="mx-auto mb-30 grid max-w-site grid-cols-1 items-start gap-6 px-5 md:grid-cols-12 md:px-16"
	>
		<div
			class="order-2 mt-12 h-fit rounded border border-outline-variant/30 bg-surface-container-lowest p-8 md:order-1 md:col-span-5 md:mt-0"
		>
			<h2
				class="hatch-text mb-8 flex items-center gap-2 border-b border-tertiary-fixed-dim pb-4 font-display text-headline-sm text-primary"
			>
				<span class="material-symbols-outlined text-tertiary-fixed-dim">straighten</span>
				{b.specsTitle}
			</h2>
			<dl class="grid grid-cols-1 gap-6">
				{#each b.specs as spec, i (spec.label)}
					{#if i > 0}
						<div class="tick h-px bg-outline-variant/20"></div>
					{/if}
					<div class="tick">
						<dt class="mb-1 text-caps text-primary-container/60 uppercase">{spec.label}</dt>
						<dd class="text-body {spec.todo ? 'text-outline italic' : 'text-primary'}">
							{spec.value}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
		<div
			class="open-frame drift group order-1 h-[400px] overflow-hidden rounded bg-surface-variant md:order-2 md:col-span-7 md:h-[760px]"
		>
			<Img
				src={p.specs.src}
				alt={p.specs.alt}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			/>
		</div>
	</section>

	<!-- Dotazioni + planimetria -->
	<section use:reveal class="mx-auto mb-30 max-w-site px-5 md:px-16">
		<h2 class="hatch-text mb-8 font-display text-headline text-primary">{b.equipmentTitle}</h2>
		<div
			class="settle mb-12 rounded border border-outline-variant/30 bg-surface-container-lowest p-6"
		>
			<Img src={p.deckPlan.src} alt={p.deckPlan.alt} class="mx-auto h-auto w-full object-contain" />
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each b.equipment as category (category.title)}
				<details
					open
					class="tick group h-fit rounded border border-outline-variant/30 bg-surface-bright"
				>
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-3 p-5 text-caps text-primary-container/60 uppercase transition-colors hover:text-primary [&::-webkit-details-marker]:hidden"
					>
						{category.title}
						<span
							class="material-symbols-outlined text-tertiary-fixed-dim transition-transform duration-300 group-open:rotate-180"
						>
							expand_more
						</span>
					</summary>
					<ul
						class="list-disc space-y-3 border-t border-outline-variant/20 p-5 pl-10 text-body text-on-surface-variant marker:text-tertiary-fixed-dim"
					>
						{#each category.items as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</details>
			{/each}
		</div>
	</section>

	<!-- Fascia a tutta larghezza -->
	<section
		use:reveal
		class="open-frame drift-deep relative mb-30 h-[60vh] min-h-[360px] overflow-hidden bg-surface-variant"
	>
		<Img src={p.banner.src} alt={p.banner.alt} class="h-full w-full object-cover" />
		<div class="absolute inset-0 bg-primary-container/40 mix-blend-multiply"></div>
		<!-- la foto scorre sotto la frase: la velatura tiene il contrasto qualunque
		     porzione dell'immagine passi dietro al testo -->
		<div class="absolute inset-0 bg-primary/35"></div>
		<p
			class="settle absolute inset-0 m-auto flex max-w-3xl items-center justify-center px-5 text-center font-display text-headline-sm text-white drop-shadow-lg md:text-headline"
		>
			{t.claim}
		</p>
	</section>

	<!-- Galleria -->
	<section use:reveal class="mx-auto mb-30 max-w-site px-5 md:px-16">
		<span class="settle mb-3 block text-caps text-primary-container/60 uppercase"
			>{b.galleryOverline}</span
		>
		<h2 class="hatch-text mb-12 font-display text-headline text-primary">{b.galleryTitle}</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each p.gallery as photo (photo.src)}
				<div
					class="open-frame drift group h-[300px] overflow-hidden rounded bg-surface-variant md:h-[360px]"
				>
					<Img
						src={photo.src}
						alt={photo.alt}
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			{/each}
		</div>
	</section>

	<!-- CTA -->
	<section use:reveal class="mx-auto max-w-site px-5 text-center md:px-16">
		<div class="gradient-sea flex flex-col items-center justify-center rounded px-8 py-24">
			<h2 class="hatch-text mb-6 font-display text-headline text-on-primary">{b.ctaTitle}</h2>
			<p class="settle mx-auto mb-10 max-w-2xl text-body-lg text-primary-fixed-dim">{b.ctaText}</p>
			<!-- il .settle sta sul contenitore: sul link sovrascriverebbe la
			     transizione di hover -->
			<div class="settle">
				<a
					class="inline-flex items-center gap-2 rounded bg-on-primary px-8 py-4 text-label text-primary-container shadow-lg transition-colors hover:bg-secondary-fixed"
					href="/{data.lang}/charter#contact"
				>
					{t.cta}
					<span class="material-symbols-outlined text-xl">arrow_forward</span>
				</a>
			</div>
		</div>
	</section>
</main>
