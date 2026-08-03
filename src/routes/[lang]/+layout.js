import { error } from '@sveltejs/kit';
import { dict } from '$lib/i18n';
import { photos } from '$lib/site';

// '/img/boat/master-cabin.jpg' -> 'master-cabin', la chiave in `photoAlts`.
/** @param {string} src */
const subject = (src) => src.split('/').pop()?.replace(/\.\w+$/, '') ?? '';

/**
 * @param {any} node
 * @param {Record<string, string>} alts
 * @returns {any} stessa forma di `photos`, con { src, alt } al posto dei percorsi
 */
function withAlts(node, alts) {
	if (typeof node === 'string') return { src: node, alt: alts[subject(node)] ?? '' };
	if (Array.isArray(node)) return node.map((n) => withAlts(n, alts));
	return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, withAlts(v, alts)]));
}

export function load({ params }) {
	const t = dict[params.lang];
	if (!t) error(404, `Lingua non gestita: ${params.lang}`);

	return {
		lang: params.lang,
		t,
		photos: withAlts(photos, t.photoAlts)
	};
}
