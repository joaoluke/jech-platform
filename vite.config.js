import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        docs: resolve(__dirname, 'docs.html'),
        playground: resolve(__dirname, 'playground.html'),
        internals: resolve(__dirname, 'internals.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})
