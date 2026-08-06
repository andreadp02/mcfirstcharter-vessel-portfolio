<script>
	import { page } from '$app/state';
	import { site } from '$lib/site';
	import { langs } from '$lib/i18n';

	let { children, data } = $props();
	let menuOpen = $state(false);

	const t = $derived(data.t);
	const active = (/** @type {string} */ href) => page.url.pathname === `/${data.lang}${href}`;
	// /it/boat -> /en/boat ; /it -> /en
	const swap = (/** @type {string} */ code) => `/${code}${page.url.pathname.slice(3)}`;
</script>

<nav class="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/90 backdrop-blur-md">
	<div class="mx-auto flex max-w-site items-center justify-between gap-2 px-4 py-4 md:gap-4 md:px-16">
		<!-- logotipo: ricalca il monogramma del favicon, M blu + F oro, serif in
		     maiuscoletto largo. Il nome è scritto qui perché va spezzato in due
		     colori; site.name resta la fonte per tutto il resto.
		     Su mobile rimpicciolisce per lasciare in riga il pulsante Prenota. -->
		<a
			class="font-display text-[15px] tracking-[0.06em] whitespace-nowrap text-primary-container uppercase min-[380px]:text-[17px] sm:text-[18px] sm:tracking-[0.1em] md:text-headline-sm md:tracking-[0.14em]"
			href="/{data.lang}"
		>
			Mc<span class="text-[#b8924f]">First</span> Charter
		</a>

		<div class="hidden items-center space-x-12 md:flex">
			{#each t.nav as item (item.href)}
				<a
					class="text-body transition-colors duration-300 {active(item.href)
						? 'border-b-2 border-secondary pb-1 font-semibold text-secondary'
						: 'text-on-surface-variant hover:text-secondary'}"
					href="/{data.lang}{item.href}">{item.label}</a
				>
			{/each}
		</div>

		<div class="flex items-center gap-2 md:gap-6">
			<div class="hidden items-center gap-2 text-caps uppercase md:flex" aria-label={t.language}>
				{#each langs as l (l.code)}
					<a
						class={l.code === data.lang
							? 'font-semibold text-secondary'
							: 'text-on-surface-variant transition-colors hover:text-secondary'}
						hreflang={l.code}
						title={l.label}
						href={swap(l.code)}>{l.code}</a
					>
				{/each}
			</div>
			<!-- sempre visibile, anche su mobile: prenotare non deve passare dal menù -->
			<a
				class="shrink-0 rounded bg-primary-container px-3 py-2 text-label whitespace-nowrap text-on-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md md:px-6 md:py-2.5"
				href="/{data.lang}/charter#contact">{t.book}</a
			>

			<!-- nello stesso gruppo del Prenota: su mobile il pulsante resta appoggiato
			     alle tre linee, in fondo a destra -->
			<button
				class="flex shrink-0 items-center text-primary md:hidden"
				aria-label={t.menu}
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span class="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
		<div
			class="flex flex-col gap-4 border-t border-outline-variant/30 bg-surface-container-lowest px-5 py-6 md:hidden"
			onclick={() => (menuOpen = false)}
		>
			{#each t.nav as item (item.href)}
				<a
					class="text-body {active(item.href)
						? 'font-semibold text-secondary'
						: 'text-on-surface-variant'}"
					href="/{data.lang}{item.href}">{item.label}</a
				>
			{/each}
			<div class="flex gap-4 border-t border-outline-variant/30 pt-4 text-caps uppercase">
				{#each langs as l (l.code)}
					<a
						class={l.code === data.lang ? 'font-semibold text-secondary' : 'text-on-surface-variant'}
						hreflang={l.code}
						href={swap(l.code)}>{l.code}</a
					>
				{/each}
			</div>
		</div>
	{/if}
</nav>

{@render children()}

<footer class="w-full border-t border-tertiary bg-primary-container">
	<div class="mx-auto grid max-w-site grid-cols-1 gap-6 px-5 py-20 md:grid-cols-4 md:px-16">
		<div class="mb-10 md:mb-0">
			<span class="mb-4 block font-display text-headline tracking-[0.14em] text-white uppercase">
				Mc<span class="text-[#b8924f]">First</span> Charter
			</span>
			<p class="text-sm text-on-primary-container/70">{t.tagline}</p>
		</div>
		<div class="flex flex-wrap gap-x-12 gap-y-6 text-caps uppercase md:col-span-2">
			{#each t.nav as item (item.href)}
				<a
					class="text-on-primary-container/70 transition-colors hover:text-tertiary-fixed"
					href="/{data.lang}{item.href}"
				>
					{item.label}
				</a>
			{/each}
			<a
				class="text-on-primary-container/70 transition-colors hover:text-tertiary-fixed"
				href="/{data.lang}/charter#contact"
			>
				{t.contacts}
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
