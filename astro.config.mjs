// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

// import cloudflare from '@astrojs/cloudflare';

// import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  output: "static",

  vite: {
    plugins: [tailwindcss()]
  },

  // adapter: cloudflare()
});