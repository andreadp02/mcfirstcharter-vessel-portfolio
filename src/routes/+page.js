import { redirect } from '@sveltejs/kit';
import { defaultLang } from '$lib/i18n';

// ponytail: "/" rimanda alla lingua di default. Niente detezione da Accept-Language:
// il sito è prerenderizzato, non c'è una richiesta da leggere.
export const load = () => redirect(307, `/${defaultLang}`);
