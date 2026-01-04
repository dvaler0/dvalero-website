import { createRequire } from 'module';
import animations from '@midudev/tailwind-animations';

const require = createRequire(import.meta.url);
const flowbitePlugin = require('flowbite/plugin');

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {},
	},
	plugins: [
		flowbitePlugin,
		animations
	],
}

