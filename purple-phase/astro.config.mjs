import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import markdownIntegration from '@astropub/md'
import MarkdownIt from 'markdown-it';
import octokit from "@octokit/rest"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Example: Provide a custom path to a Tailwind config file
      // config: { path: './custom-config.cjs' },
    }), 
    mdx(),
    markdownIntegration(),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    // syntaxHighlight: 'shiki'
    // syntaxHighlight: 'prism'
  }
});
