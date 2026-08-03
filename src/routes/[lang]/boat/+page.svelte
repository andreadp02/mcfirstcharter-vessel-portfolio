<script>
	import Img from '$lib/Img.svelte';
	import { site, boat } from '$lib/site';
	import { reveal } from '$lib/reveal';

	let { data } = $props();
	const t = $derived(data.t);
	const b = $derived(data.t.boat);

	// impaginazione del mockup "immersive reveal": una foto per sezione,
	// le ultime quattro nella griglia finale. Vedi static/img/README.md.
	const p = $derived(data.photos);
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
				src={p[0].src}
				alt={p[0].alt}
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
		<div class="settle md:col-span-7 md:pr-12">
			<h2 class="mb-8 font-display text-headline text-primary">{b.aboardTitle}</h2>
			<div class="space-y-6 text-body-lg leading-relaxed text-on-surface-variant">
				<p>{b.p1}</p>
				<p>{b.p2}</p>
			</div>
		</div>
		<div
			class="open-frame drift group mt-8 h-[400px] overflow-hidden rounded bg-surface-variant md:col-span-5 md:mt-0"
		>
			<Img
				src={p[1].src}
				alt={p[1].alt}
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
				class="tick mb-8 flex items-center gap-2 border-b border-tertiary-fixed-dim pb-4 font-display text-headline-sm text-primary"
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
				src={p[2].src}
				alt={p[2].alt}
				class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			/>
		</div>
	</section>

	<!-- Dotazioni + planimetria -->
	<section
		use:reveal
		class="mx-auto mb-30 grid max-w-site grid-cols-1 items-center gap-6 px-5 md:grid-cols-12 md:px-16"
	>
		<div class="order-2 mt-12 md:order-1 md:col-span-5 md:mt-0">
			<div class="rounded border border-outline-variant/30 bg-surface-bright p-8">
				<h2 class="tick mb-6 font-display text-headline-sm text-primary">{b.equipmentTitle}</h2>
				<div class="space-y-6">
					{#each b.equipment as category (category.title)}
						<div class="tick">
							<h3 class="mb-3 text-caps text-primary-container/60 uppercase">{category.title}</h3>
							<ul class="grid grid-cols-1 gap-3 text-body text-on-surface-variant sm:grid-cols-2 md:grid-cols-1">
								{#each category.items as item (item)}
									<li class="flex items-center gap-3">
										<span class="material-symbols-outlined text-sm text-tertiary-fixed-dim">check</span>
										{item}
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div
			class="settle order-1 rounded border border-outline-variant/30 bg-surface-container-lowest p-6 md:order-2 md:col-span-7"
		>
			<Img src={data.layout.src} alt={data.layout.alt} class="h-auto w-full object-contain" />
		</div>
	</section>

	<!-- Fascia a tutta larghezza -->
	<section
		use:reveal
		class="open-frame drift-deep relative mb-30 h-[60vh] min-h-[360px] overflow-hidden bg-surface-variant"
	>
		<Img src={p[4].src} alt={p[4].alt} class="h-full w-full object-cover" />
		<div class="absolute inset-0 bg-primary-container/40 mix-blend-multiply"></div>
		<!-- la foto scorre sotto la frase: la velatura tiene il contrasto qualunque
		     porzione dell'immagine passi dietro al testo -->
		<div
			class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/70 via-primary/25 to-transparent"
		></div>
		<p
			class="settle absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-5 pb-12 text-center font-display text-headline-sm text-surface-container-lowest drop-shadow-lg md:pb-16 md:text-headline"
		>
			{t.claim}
		</p>
	</section>

	<!-- Galleria -->
	<section use:reveal class="mx-auto mb-30 max-w-site px-5 md:px-16">
		<span class="mb-3 block text-caps text-primary-container/60 uppercase">{b.galleryOverline}</span>
		<h2 class="mb-12 font-display text-headline text-primary">{b.galleryTitle}</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each [p[3], ...p.slice(5)] as photo (photo.src)}
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
	<section class="mx-auto max-w-site px-5 text-center md:px-16">
		<div class="gradient-sea flex flex-col items-center justify-center rounded px-8 py-24">
			<h2 class="mb-6 font-display text-headline text-on-primary">{b.ctaTitle}</h2>
			<p class="mx-auto mb-10 max-w-2xl text-body-lg text-primary-fixed-dim">{b.ctaText}</p>
			<a
				class="inline-flex items-center gap-2 rounded bg-on-primary px-8 py-4 text-label text-primary-container shadow-lg transition-colors hover:bg-secondary-fixed"
				href="/{data.lang}/#contact"
			>
				{t.cta}
				<span class="material-symbols-outlined text-xl">arrow_forward</span>
			</a>
		</div>
	</section>
</main>
