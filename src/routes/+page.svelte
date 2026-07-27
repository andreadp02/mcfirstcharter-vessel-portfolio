<script>
	import Img from '$lib/Img.svelte';
	import { site, boat } from '$lib/site';

	const highlights = [
		{ icon: 'bed', title: '4 cabine', text: 'Doppie e confortevoli' },
		{ icon: 'shower', title: '4 bagni', text: 'Docce interne ed esterne' },
		{ icon: 'kitchen', title: 'Cucina completa', text: 'Con frigorifero' },
		{ icon: 'explore', title: 'GPS e autopilota', text: 'Elica di prua' }
	];

	const strengths = [
		{
			icon: 'groups',
			title: 'Ideale per gruppi',
			text: 'Quattro cabine e quattro bagni: privacy e vivibilità anche per gruppi numerosi.'
		},
		{
			icon: 'sailing',
			title: 'Ottime prestazioni',
			text: 'Comportamento brillante sia a vela che a motore, in sicurezza e comfort.'
		},
		{
			icon: 'calendar_month',
			title: 'Weekend o settimana',
			text: 'Crociere settimanali, weekend e vacanze relax tra baie e isole.'
		}
	];
</script>

<svelte:head>
	<title>{site.name} — {boat.name}, {boat.model}</title>
	<meta
		name="description"
		content="Noleggio della Dufour 460 GL VERA: 14 metri, 4 cabine, 4 bagni. Crociere settimanali, weekend e vacanze relax tra baie e isole."
	/>
</svelte:head>

<main>
	<!-- Hero -->
	<section
		class="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-surface-variant pt-24"
	>
		<div class="absolute inset-0 z-0">
			<Img
				src={boat.photos[0].src}
				alt={boat.photos[0].alt}
				loading="eager"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 z-10 bg-primary-container/40 mix-blend-multiply"></div>
		</div>
		<div class="relative z-20 mx-auto flex max-w-site flex-col items-center px-5 text-center md:px-16">
			<span class="mb-8 block h-px w-16 bg-tertiary-fixed-dim"></span>
			<span class="mb-4 text-caps text-surface-container-lowest/80 uppercase">{boat.model}</span>
			<h1
				class="mx-auto max-w-4xl font-display text-display-sm tracking-tight text-surface-container-lowest drop-shadow-lg md:text-display"
			>
				{boat.name}
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-body-lg font-light text-surface-container-lowest/90">
				{boat.claim}
			</p>
			<a
				class="group mt-12 flex items-center gap-3 rounded border border-surface-container-lowest/70 bg-transparent px-8 py-4 text-caps tracking-wider text-surface-container-lowest uppercase transition-all duration-300 hover:bg-surface-container-lowest hover:text-primary-container"
				href="/barca"
			>
				Scopri la barca
				<span class="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1"
					>east</span
				>
			</a>
		</div>
	</section>

	<!-- Introduzione -->
	<section class="mx-auto max-w-site px-5 py-30 md:px-16">
		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
			<div class="relative md:col-span-5 md:col-start-2">
				<div
					class="absolute -top-6 -left-6 hidden h-24 w-24 border-t border-l border-tertiary-fixed-dim opacity-50 md:block"
				></div>
				<h2 class="mb-6 font-display text-headline text-primary">Spazio, comfort, mare</h2>
				<p class="mb-6 text-body leading-relaxed text-on-surface-variant">
					Elegante e spaziosa, {boat.name} è una {boat.model} ideale per crociere in famiglia o con
					amici, perfetta per vivere il mare in totale comfort.
				</p>
				<p class="text-body leading-relaxed text-on-surface-variant">
					Ampi spazi interni ed esterni, cabine confortevoli, grande pozzetto prendisole e ottime
					prestazioni sia a vela che a motore. La disposizione intelligente degli ambienti
					garantisce privacy e vivibilità anche per gruppi numerosi.
				</p>
				<a
					class="mt-8 inline-flex items-center gap-2 border-b border-transparent pb-1 text-label text-secondary transition-colors hover:border-secondary"
					href="/barca"
				>
					Scheda tecnica e planimetria
					<span class="material-symbols-outlined text-sm">arrow_forward</span>
				</a>
			</div>
			<div class="group relative mt-12 md:col-span-5 md:col-start-8 md:mt-0">
				<div
					class="aspect-4/5 w-full overflow-hidden rounded border border-outline-variant/30 bg-surface-variant"
				>
					<Img
						src={boat.photos[1].src}
						alt={boat.photos[1].alt}
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Dotazioni -->
	<section class="border-y border-outline-variant/20 bg-surface-bright py-30">
		<div class="mx-auto max-w-site px-5 md:px-16">
			<span class="mb-3 block text-caps text-primary-container/60 uppercase">A bordo</span>
			<h2 class="mb-16 font-display text-headline text-primary">Tutto quello che serve</h2>
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
				{#each highlights as h (h.title)}
					<div class="border-t border-outline-variant/40 pt-6">
						<span
							class="material-symbols-outlined mb-4 block text-3xl text-primary-container opacity-80"
							>{h.icon}</span
						>
						<p class="text-body font-medium text-primary">{h.title}</p>
						<p class="text-sm text-on-surface-variant">{h.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Anteprima galleria -->
	<section class="mx-auto max-w-site px-5 py-30 md:px-16">
		<div class="mb-16 flex flex-col items-start justify-between md:flex-row md:items-end">
			<div>
				<span class="mb-3 block text-caps text-primary-container/60 uppercase">Galleria</span>
				<h2 class="font-display text-headline text-primary">{boat.name} in immagini</h2>
			</div>
			<a
				class="hidden border-b border-secondary pb-1 text-label text-secondary md:inline-flex"
				href="/barca"
			>
				Vedi tutte le foto
			</a>
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each boat.photos.slice(2, 5) as photo (photo.src)}
				<div
					class="aspect-4/3 overflow-hidden rounded border border-outline-variant/30 bg-surface-variant"
				>
					<Img src={photo.src} alt={photo.alt} class="h-full w-full object-cover" />
				</div>
			{/each}
		</div>
	</section>

	<!-- Punti di forza -->
	<section class="mx-auto max-w-site px-5 pb-30 md:px-16">
		<div
			class="grid grid-cols-1 gap-12 divide-y divide-outline-variant/30 text-center md:grid-cols-3 md:divide-x md:divide-y-0 md:text-left"
		>
			{#each strengths as s (s.title)}
				<div class="flex flex-col items-center pt-8 md:items-start md:px-12 md:pt-0">
					<span class="material-symbols-outlined mb-6 text-4xl text-primary-container opacity-80"
						>{s.icon}</span
					>
					<h3 class="mb-3 text-body-lg font-medium text-primary">{s.title}</h3>
					<p class="text-sm text-on-surface-variant">{s.text}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Contatti -->
	<section id="contatti" class="mx-auto max-w-site px-5 pb-30 md:px-16">
		<div
			class="flex flex-col items-center justify-center rounded bg-primary-container px-8 py-24 text-center"
		>
			<h2 class="mb-6 font-display text-headline text-on-primary">Pronti a salpare?</h2>
			<p class="mx-auto mb-10 max-w-2xl text-body-lg text-primary-fixed-dim">
				Scrivici per verificare le disponibilità e ricevere un preventivo per il tuo periodo.
			</p>
			<div class="flex flex-col gap-4 sm:flex-row">
				<a
					class="inline-flex items-center gap-2 rounded bg-on-primary px-8 py-4 text-label text-primary-container transition-colors hover:bg-secondary-fixed"
					href="mailto:{site.email}?subject=Richiesta%20disponibilit%C3%A0%20{boat.name}"
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
