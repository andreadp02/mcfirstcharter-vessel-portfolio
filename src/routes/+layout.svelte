<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { site, nav } from '$lib/site';

	let { children } = $props();
	let menuOpen = $state(false);

	const active = (/** @type {string} */ href) => page.url.pathname === href;
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/90 backdrop-blur-md">
	<div class="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-4 md:px-16">
		<a class="font-display text-headline-sm tracking-tighter text-primary uppercase" href="/">
			{site.name}
		</a>

		<div class="hidden items-center space-x-12 md:flex">
			{#each nav as item (item.href)}
				<a
					class="text-body transition-colors duration-300 {active(item.href)
						? 'border-b-2 border-secondary pb-1 font-semibold text-secondary'
						: 'text-on-surface-variant hover:text-secondary'}"
					href={item.href}>{item.label}</a
				>
			{/each}
		</div>

		<a
			class="hidden rounded bg-primary-container px-6 py-2.5 text-label text-on-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md md:inline-block"
			href="/#contatti">Richiedi disponibilità</a
		>

		<button
			class="flex items-center text-primary md:hidden"
			aria-label="Menu"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
		</button>
	</div>

	{#if menuOpen}
		<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
		<div
			class="flex flex-col gap-4 border-t border-outline-variant/30 bg-surface-container-lowest px-5 py-6 md:hidden"
			onclick={() => (menuOpen = false)}
		>
			{#each nav as item (item.href)}
				<a
					class="text-body {active(item.href)
						? 'font-semibold text-secondary'
						: 'text-on-surface-variant'}"
					href={item.href}>{item.label}</a
				>
			{/each}
			<a
				class="rounded bg-primary-container px-4 py-2.5 text-center text-label text-on-primary"
				href="/#contatti">Richiedi disponibilità</a
			>
		</div>
	{/if}
</nav>

{@render children()}

<footer class="w-full border-t border-tertiary bg-primary-container">
	<div class="mx-auto grid max-w-site grid-cols-1 gap-6 px-5 py-20 md:grid-cols-4 md:px-16">
		<div class="mb-10 md:mb-0">
			<span class="mb-4 block font-display text-headline text-on-primary-container uppercase">
				{site.name}
			</span>
			<p class="text-sm text-on-primary-container/70">{site.tagline}</p>
		</div>
		<div class="flex flex-wrap gap-x-12 gap-y-6 text-caps uppercase md:col-span-2">
			{#each nav as item (item.href)}
				<a
					class="text-on-primary-container/70 transition-colors hover:text-tertiary-fixed"
					href={item.href}
				>
					{item.label}
				</a>
			{/each}
			<a
				class="text-on-primary-container/70 transition-colors hover:text-tertiary-fixed"
				href="/#contatti"
			>
				Contatti
			</a>
		</div>
		<div class="mt-10 flex items-end justify-start md:mt-0 md:justify-end">
			<p class="text-caps text-on-primary-container/50">
				© {new Date().getFullYear()}
				{site.name.toUpperCase()}
			</p>
		</div>
	</div>
</footer>
