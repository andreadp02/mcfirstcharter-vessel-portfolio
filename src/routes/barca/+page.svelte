<script>
	import Img from '$lib/Img.svelte';
	import { site, boat } from '$lib/site';

	const [hero, ...rest] = boat.photos;
	const bento = rest.slice(0, 3); // foto 02-04 accanto alla grande
	const gallery = rest.slice(3); // foto 05-09
</script>

<svelte:head>
	<title>La Barca — {boat.name}, {boat.model} | {site.name}</title>
	<meta
		name="description"
		content="Scheda tecnica, dotazioni, galleria fotografica e planimetria della Dufour 460 GL VERA: 14 metri, 4 cabine, 4 bagni."
	/>
</svelte:head>

<main class="pt-24 pb-30">
	<!-- Titolo + galleria principale -->
	<section class="mx-auto max-w-site px-5 pt-8 pb-30 md:px-16">
		<div class="mx-auto mb-12 max-w-3xl text-center">
			<span class="mb-4 block text-caps text-primary-container/60 uppercase">{boat.model}</span>
			<h1 class="mb-6 font-display text-display-sm text-primary md:text-display">{boat.name}</h1>
			<p class="text-body-lg text-on-surface-variant">
				Elegante e spaziosa, ideale per crociere in famiglia o con amici, perfetta per vivere il mare
				in totale comfort.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
			<div
				class="aspect-4/3 overflow-hidden rounded bg-surface-variant md:col-span-2 md:row-span-2 md:aspect-auto"
			>
				<Img
					src={hero.src}
					alt={hero.alt}
					loading="eager"
					class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
				/>
			</div>
			{#each bento as photo, i (photo.src)}
				<div
					class="aspect-4/3 overflow-hidden rounded bg-surface-variant md:aspect-auto {i === 2
						? 'md:col-span-2'
						: ''}"
				>
					<Img
						src={photo.src}
						alt={photo.alt}
						class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
					/>
				</div>
			{/each}
		</div>
	</section>

	<!-- Descrizione + scheda tecnica -->
	<section class="mx-auto grid max-w-site grid-cols-1 items-start gap-6 px-5 pb-30 md:grid-cols-12 md:px-16">
		<div
			class="order-2 mt-12 h-fit rounded border border-outline-variant/30 bg-surface-container-lowest p-8 md:order-1 md:col-span-4 md:mt-0"
		>
			<h2
				class="mb-8 flex items-center gap-2 border-b border-tertiary-fixed-dim pb-4 font-display text-headline-sm text-primary"
			>
				<span class="material-symbols-outlined text-tertiary-fixed-dim">straighten</span>
				Scheda tecnica
			</h2>
			<dl class="grid grid-cols-1 gap-6">
				{#each boat.specs as spec, i (spec.label)}
					{#if i > 0}
						<div class="h-px bg-outline-variant/20"></div>
					{/if}
					<div>
						<dt class="mb-1 text-caps text-primary-container/60 uppercase">{spec.label}</dt>
						<dd class="text-body {spec.todo ? 'text-outline italic' : 'text-primary'}">
							{spec.value}
						</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="order-1 md:order-2 md:col-span-8 md:pl-12">
			<h2 class="mb-8 font-display text-headline text-primary">A bordo di {boat.name}</h2>
			<div class="space-y-6 text-body-lg leading-relaxed text-on-surface-variant">
				<p>
					Questa barca a vela di 14 metri offre ampi spazi interni ed esterni, cabine confortevoli,
					grande pozzetto prendisole e ottime prestazioni sia a vela che a motore. La disposizione
					intelligente degli ambienti garantisce privacy e vivibilità anche per gruppi numerosi.
				</p>
				<p>Ideale per crociere settimanali, weekend e vacanze relax tra baie e isole.</p>
			</div>

			<h3 class="mt-12 mb-6 font-display text-headline-sm text-primary">Dotazioni</h3>
			<ul class="grid grid-cols-1 gap-4 text-body text-on-surface-variant sm:grid-cols-2">
				{#each boat.equipment as item (item)}
					<li class="flex items-center gap-3">
						<span class="material-symbols-outlined text-sm text-tertiary-fixed-dim">check</span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Galleria completa -->
	<section class="mx-auto max-w-site px-5 pb-30 md:px-16">
		<span class="mb-3 block text-caps text-primary-container/60 uppercase">Galleria</span>
		<h2 class="mb-12 font-display text-headline text-primary">Interni ed esterni</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each gallery as photo, i (photo.src)}
				<div
					class="aspect-4/3 overflow-hidden rounded bg-surface-variant {i === 3
						? 'md:col-span-2 md:aspect-8/3'
						: ''}"
				>
					<Img
						src={photo.src}
						alt={photo.alt}
						class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
					/>
				</div>
			{/each}
		</div>
	</section>

	<!-- Planimetria -->
	<section class="mx-auto max-w-site px-5 pb-30 md:px-16">
		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
			<div class="md:col-span-4">
				<span class="mb-3 block text-caps text-primary-container/60 uppercase">Layout</span>
				<h2 class="mb-6 font-display text-headline text-primary">Planimetria</h2>
				<p class="text-body leading-relaxed text-on-surface-variant">
					Quattro cabine e quattro bagni distribuiti per garantire privacy a ogni equipaggio, con
					quadrato e cucina al centro della barca.
				</p>
			</div>
			<div class="md:col-span-8">
				<div class="rounded border border-outline-variant/30 bg-surface-container-lowest p-6">
					<Img src={boat.layout.src} alt={boat.layout.alt} class="h-auto w-full object-contain" />
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="mx-auto max-w-site px-5 text-center md:px-16">
		<div
			class="flex flex-col items-center justify-center rounded bg-primary-container px-8 py-24"
		>
			<h2 class="mb-6 font-display text-headline text-on-primary">Vuoi salire a bordo?</h2>
			<p class="mx-auto mb-10 max-w-2xl text-body-lg text-primary-fixed-dim">
				Contattaci per disponibilità e preventivo.
			</p>
			<a
				class="inline-flex items-center gap-2 rounded bg-on-primary px-8 py-4 text-label text-primary-container transition-colors hover:bg-secondary-fixed"
				href="/#contatti"
			>
				Richiedi disponibilità
				<span class="material-symbols-outlined text-xl">arrow_forward</span>
			</a>
		</div>
	</section>
</main>
