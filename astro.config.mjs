// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astronomy 101',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/unkn0wn-entity/astronomy-101-cb275/' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The Index', slug: 'guides/example' },
					],
				},
				{
					label: 'Acknowledgements',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
