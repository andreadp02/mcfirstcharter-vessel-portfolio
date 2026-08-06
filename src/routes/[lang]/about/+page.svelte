<script>
	import Img from '$lib/Img.svelte';
	import { site } from '$lib/site';

	let { data } = $props();
	const t = $derived(data.t);
	const a = $derived(data.t.about);
	const p = $derived(data.photos.about);
</script>

<svelte:head>
	<title>{a.title} | {site.name}</title>
	<meta name="description" content={a.metaDesc} />
</svelte:head>

<main class="pt-24">
	<!-- Hero -->
	<section
		class="relative mb-30 flex h-[60vh] min-h-[400px] items-center justify-center bg-surface-variant px-5 md:px-16"
	>
		<div class="absolute inset-0 z-0">
			<Img
				src={p.hero.src}
				alt={p.hero.alt}
				loading="eager"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-primary-container/40 mix-blend-multiply"></div>
		</div>
		<div class="relative z-10 mx-auto max-w-3xl text-center text-on-primary">
			<h1 class="mb-6 font-display text-display-sm md:text-display">{a.heroTitle}</h1>
			<span class="mx-auto block h-px w-24 bg-tertiary-fixed-dim"></span>
		</div>
	</section>

	<!-- Storia -->
	<section class="mx-auto mb-30 max-w-site px-5 md:px-16">
		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
			<div class="order-2 md:order-1 md:col-span-5">
				<div
					class="aspect-square overflow-hidden rounded-full border border-outline-variant/30 bg-surface-variant"
				>
					<Img
						src={p.portrait.src}
						alt={p.portrait.alt}
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
			<div class="order-1 mb-12 md:order-2 md:col-span-6 md:col-start-7 md:mb-0">
				<h2 class="mb-6 font-display text-headline text-primary">{a.storyTitle}</h2>
				<p class="mb-6 text-body-lg text-on-surface-variant">{a.p1}</p>
				<p class="text-body text-on-surface-variant">{a.p2}</p>
			</div>
		</div>
	</section>

	<!-- Lo skipper -->
	<section class="mx-auto mb-30 max-w-site px-5 md:px-16">
		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
			<div class="mb-12 md:col-span-6 md:mb-0">
				<h2 class="mb-2 font-display text-headline text-primary">{a.skipperTitle}</h2>
				<h3 class="mb-8 text-body-lg text-secondary">{a.skipperName}</h3>
				<div class="flex flex-col gap-6">
					{#each a.skipperPoints as pt (pt.title)}
						<div class="flex items-start gap-4">
							<span class="material-symbols-outlined mt-1 text-secondary">{pt.icon}</span>
							<div>
								<h4 class="mb-2 text-label font-semibold text-primary">{pt.title}</h4>
								<p class="text-body text-on-surface-variant">{pt.text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="md:col-span-5 md:col-start-8">
				<div
					class="aspect-[4/5] overflow-hidden rounded-t-[100px] border border-outline-variant/30 bg-surface-variant"
				>
					<Img src={p.skipper.src} alt={p.skipper.alt} class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- Come lavoriamo -->
	<section class="mb-30 border-y border-outline-variant/20 bg-surface-bright py-30">
		<div class="mx-auto max-w-site px-5 md:px-16">
			<h2 class="mb-12 font-display text-headline text-primary">{a.valuesTitle}</h2>
			<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
				{#each a.values as v (v.title)}
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
			<h2 class="mb-6 font-display text-headline text-on-primary">{a.ctaTitle}</h2>
			<p class="mx-auto mb-10 max-w-2xl text-body-lg text-primary-fixed-dim">{a.ctaText}</p>
			<a
				class="inline-flex items-center gap-2 rounded bg-on-primary px-8 py-4 text-label text-primary-container transition-colors hover:bg-secondary-fixed"
				href="/{data.lang}/charter#contact"
			>
				{t.cta}
				<span class="material-symbols-outlined text-xl">arrow_forward</span>
			</a>
		</div>
	</section>
</main>
