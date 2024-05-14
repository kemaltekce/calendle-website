import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import { resolve } from 'path'

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bullets: resolve(__dirname, 'pages/bullets.html'),
        design: resolve(__dirname, 'pages/design.html'),
        hotkeys: resolve(__dirname, 'pages/hotkeys.html'),
        lists: resolve(__dirname, 'pages/lists.html'),
        mode: resolve(__dirname, 'pages/mode.html'),
        privacy: resolve(__dirname, 'pages/privacy.html'),
        timer: resolve(__dirname, 'pages/timer.html'),
      },
    },
  },
  plugins: [],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})
