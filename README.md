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