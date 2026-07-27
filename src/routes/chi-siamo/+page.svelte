<script>
	import Img from '$lib/Img.svelte';
	import { site, boat } from '$lib/site';

	const values = [
		{
			icon: 'directions_boat',
			title: 'Barca pronta',
			text: 'Manutenzione, dotazioni di sicurezza e pulizia verificate prima di ogni partenza.'
		},
		{
			icon: 'map',
			title: 'Rotta condivisa',
			text: 'L’itinerario si decide insieme, adattandolo a meteo, vento e ritmo dell’equipaggio.'
		},
		{
			icon: 'support_agent',
			title: 'Sempre reperibili',
			text: 'Un riferimento a terra per qualsiasi necessità durante tutta la crociera.'
		}
	];
</script>

<svelte:head>
	<title>Chi Siamo | {site.name}</title>
	<meta name="description" content="{site.name}: chi siamo e come lavoriamo a bordo di VERA, Dufour 460 GL." />
</svelte:head>

<main class="pt-24">
	<!-- Hero -->
	<section
		class="relative mb-30 flex h-[60vh] min-h-[400px] items-center justify-center bg-surface-variant px-5 md:px-16"
	>
		<div class="absolute inset-0 z-0">
			<Img
				src={boat.photos[2].src}
				alt={boat.photos[2].alt}
				loading="eager"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-primary-container/40 mix-blend-multiply"></div>
		</div>
		<div class="relative z-10 mx-auto max-w-3xl text-center text-on-primary">
			<h1 class="mb-6 font-display text-display-sm md:text-display">Il mare, condiviso.</h1>
			<span class="mx-auto block h-px w-24 bg-tertiary-fixed-dim"></span>
		</div>
	</section>

	<!-- Storia -->
	<!-- TODO: riscrivere con la storia reale di McFirst Charter -->
	<section class="mx-auto mb-30 max-w-site px-5 md:px-16">
		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
			<div class="order-2 md:order-1 md:col-span-5">
				<div
					class="aspect-square overflow-hidden rounded-full border border-outline-variant/30 bg-surface-variant"
				>
					<Img src={boat.photos[5].src} alt={boat.photos[5].alt} class="h-full w-full object-cover" />
				</div>
			</div>
			<div class="order-1 mb-12 md:order-2 md:col-span-6 md:col-start-7 md:mb-0">
				<h2 class="mb-6 font-display text-headline text-primary">La nostra storia</h2>
				<p class="mb-6 text-body-lg text-on-surface-variant">
					{site.name} nasce dalla passione per il mare e dal desiderio di condividerla. {boat.name},
					la nostra {boat.model}, è pensata per far vivere il mare in totale comfort a famiglie e
					gruppi di amici.
				</p>
				<p class="text-body text-on-surface-variant">
					Curiamo la barca nei dettagli e prepariamo ogni crociera insieme a chi salpa: rotta, tappe
					e ritmo si costruiscono sulle vostre esigenze, non su un pacchetto prestabilito.
				</p>
			</div>
		</div>
	</section>

	<!-- Come lavoriamo -->
	<section class="mb-30 border-y border-outline-variant/20 bg-surface-bright py-30">
		<div class="mx-auto max-w-site px-5 md:px-16">
			<h2 class="mb-12 font-display text-headline text-primary">Come lavoriamo</h2>
			<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
				{#each values as v (v.title)}
					<div class="flex items-start gap-4">
						<span class="material-symbols-outlined mt-1 text-secondary">{v.icon}</span>
						<div>
							<h3 class="mb-2 text-label font-semibold text-primary">{v.title}</h3>
							<p class="text-body text-on-surface-variant">{v.text}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="mx-auto max-w-site px-5 pb-30 text-center md:px-16">
		<div class="flex flex-col items-center justify-center rounded bg-primary-container px-8 py-24">
			<h2 class="mb-6 font-display text-headline text-on-primary">Parliamone</h2>
			<p class="mx-auto mb-10 max-w-2xl text-body-lg text-primary-fixed-dim">
				Raccontaci quando vorresti partire e con quante persone.
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
