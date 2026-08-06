<script>
	// ponytail: se la foto non è in static/img/ l'immagine sparisce e con lei il suo
	// contenitore — il segno qui sotto lo fa nascondere da layout.css (`:has`).
	/** @type {{ src: string, alt?: string, class?: string, loading?: 'lazy' | 'eager' }} */
	let { src, alt = '', class: klass = '', loading = 'lazy' } = $props();
	let failed = $state(false);
</script>

{#if failed}
	<span class="img-missing"></span>
{:else}
	<img {src} {alt} {loading} class={klass} onerror={() => (failed = true)} />
{/if}
