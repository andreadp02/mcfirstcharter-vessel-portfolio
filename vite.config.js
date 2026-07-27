import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			prerender: {
				// ponytail: le foto arrivano dopo, un /img/ mancante è un avviso non un errore.
				// Ogni altro link rotto continua a far fallire la build.
				handleHttpError: ({ path, message }) => {
					if (path.startsWith('/img/')) return console.warn(`[foto mancante] ${path}`);
					throw new Error(message);
				}
			}
		})
	]
});
