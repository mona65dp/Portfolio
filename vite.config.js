import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    react(),
    tailwindcss(),
    //babel({ presets: [reactCompilerPreset()] })
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'My Portfolio Website',
        theme_color: '#ffffff',
        start_url: '/Portfolio/',
        scope: '/Portfolio/',
        icons: [
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
})
