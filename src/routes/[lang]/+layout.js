import { error } from '@sveltejs/kit';
import { dict } from '$lib/i18n';
import { boat } from '$lib/site';

export function load({ params }) {
	const t = dict[params.lang];
	if (!t) error(404, `Lingua non gestita: ${params.lang}`);

	return {
		lang: params.lang,
		t,
		// alt tradotti accoppiati ai file in ordine
		photos: boat.photos.map((src, i) => ({ src, alt: t.photoAlts[i] })),
		layout: { src: boat.layout, alt: t.layoutAlt }
	};
}
