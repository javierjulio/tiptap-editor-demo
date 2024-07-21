import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/tiptap-editor-demo/' // use repo name https://vitejs.dev/guide/static-deploy.html#github-pages
})
