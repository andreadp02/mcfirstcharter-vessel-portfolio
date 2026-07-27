<script>
	// ponytail: finché la foto non è in static/img/ mostra un riquadro col nome
	// del file atteso, così i buchi si vedono senza toccare il markup.
	/** @type {{ src: string, alt?: string, class?: string, loading?: 'lazy' | 'eager' }} */
	let { src, alt = '', class: klass = '', loading = 'lazy' } = $props();
	let failed = $state(false);
</script>

{#if failed}
	<div class="{klass} img-placeholder" title={alt}>{src.split('/').pop()}</div>
{:else}
	<img {src} {alt} {loading} class={klass} onerror={() => (failed = true)} />
{/if}
