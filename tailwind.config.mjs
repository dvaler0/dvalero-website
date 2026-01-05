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
		extend: {
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				'fade-in-down': 'fade-in-down 0.8s ease-out',
			},
		},
	},
	plugins: [
		flowbitePlugin,
		animations
	],
}

