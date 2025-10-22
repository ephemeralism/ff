// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import partytown from '@astrojs/partytown'; 

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    partytown({
      config: {
        forward: ['dataLayer.push'], 
      },
    }),
  ],
});