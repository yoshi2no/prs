import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import Icons from 'unplugin-icons/vite';
import { isDevelopment } from 'std-env';
import { kitRoutes } from 'vite-plugin-kit-routes';

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [
				extractorSvelte(),
			],
		}),
		Icons({
			compiler: 'svelte',
			autoInstall: isDevelopment,
		}),
		sveltekit(),
		kitRoutes({
			LINKS: {
				domain: `https://yoshi2no.dev`,
				repo: 'https://github.com/yoshi2no/prs',
				username: 'yoshi2no',
			},
		}),
	],
});
