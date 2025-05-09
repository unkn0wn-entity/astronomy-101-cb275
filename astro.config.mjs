// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astronomy 101',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Unedited Next Page', slug: 'guides/example' },
					],
				},
				{
					label: 'Astronomy 101 Introduction',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
