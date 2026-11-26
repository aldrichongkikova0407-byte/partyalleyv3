/** Prefix root-relative site paths with Astro's configured base. */
export function siteUrl(path: string): string {
	if (!path.startsWith('/') || path.startsWith('//')) return path;

	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	if (!base || path === base || path.startsWith(`${base}/`) || path.startsWith(`${base}?`) || path.startsWith(`${base}#`)) return path;
	return `${base}${path}`;
}
