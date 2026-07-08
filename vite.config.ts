import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        history: resolve(__dirname, 'pages/history.html'),
        geography: resolve(__dirname, 'pages/geography.html'),
        tourism: resolve(__dirname, 'pages/tourism.html'),
        economy: resolve(__dirname, 'pages/economy.html'),
        demographics: resolve(__dirname, 'pages/demographics.html'),
        government: resolve(__dirname, 'pages/government.html'),
        cuisine: resolve(__dirname, 'pages/cuisine.html'),
        gallery: resolve(__dirname, 'pages/gallery.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        pages: resolve(__dirname, 'pages/pages.html'),
      },
    },
  },
})
