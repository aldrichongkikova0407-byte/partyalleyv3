// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://aldrichongkikova0407-byte.github.io',
	base: '/partyalleyv3',
	vite: { plugins: [tailwindcss()] },
});
