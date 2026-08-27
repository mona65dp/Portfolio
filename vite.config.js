import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    //babel({ presets: [reactCompilerPreset()] })
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['/.ico', '/.png', 'icons.svg'],
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'My Portfolio Website',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
