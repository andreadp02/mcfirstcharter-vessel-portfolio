import { defaultLang } from '$lib/i18n';

// unica ragione d'essere: <html lang> corretto per pagina, non si può fare da +layout.svelte
export const handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang ?? defaultLang)
	});
