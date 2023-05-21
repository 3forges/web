## dev setup

* installation pnpm
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

* creation du projet astro
```bash
pnpm create astro@latest
```

* demarrage server dev
```bash
cd ./purple-phase
pnpm dev 
```
* build (construction du repertoire `./dist`)
```bash
pnpm build
```

* add tailwind css : 

```bash
pnpm exec astro add tailwind

cat <<EOF >./add.on.astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    // Example: Provide a custom path to a Tailwind config file
    config: { path: './custom-config.cjs' },
  })],
});
EOF

cat ./add.on.astro.config.mjs



pnpm add -D @astrojs/markdown-remark @astrojs/mdx @astrojs/rss @astrojs/sitemap @astrojs/tailwind @astropub/md
```


### Add Daisy UI in the astro tailwind css project

* First, install daisy ui : 

```bash
pnpm add daisyui

```

* then add the daisy ui tailwindcsss plugins to the tailwind css configuration, of the astro project `tailwind.config.cjs` : 

```cjs

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
}
```
