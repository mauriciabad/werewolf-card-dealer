import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
// import { VitePWA } from 'vite-plugin-pwa'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**'
      ),
    }),
    // TODO: Use real manifest
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   devOptions: {
    //     enabled: true,
    //   },
    //   includeAssets: [
    //     'favicon.ico',
    //     'img/icons/apple-touch-icon.png',
    //     'img/icons/safari-pinned-tab.svg',
    //     'img/icons/favicon-32x32.png',
    //     'img/icons/favicon-16x16.png',
    //   ],
    //   manifest: {
    //     name: 'Keyframes easings',
    //     short_name: 'Keyframes easings',
    //     description:
    //       'Make custom non cubic bezier easing functions using keyframes and animations with this online css code generator developer tool, like elastic and bounce easings',
    //     icons: [
    //       {
    //         src: '/img/icons/android-chrome-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //         purpose: 'any',
    //       },
    //       {
    //         src: '/img/icons/android-chrome-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any',
    //       },
    //       {
    //         src: '/img/icons/android-chrome-maskable-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //         purpose: 'maskable',
    //       },
    //       {
    //         src: '/img/icons/android-chrome-maskable-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'maskable',
    //       },
    //       {
    //         src: '/img/icons/safari-pinned-tab.svg',
    //         sizes: 'any',
    //         type: 'image/svg',
    //         purpose: 'monochrome',
    //       },
    //     ],
    //     theme_color: '#719dff',
    //     background_color: '#ffffff',
    //     display: 'standalone',
    //     lang: 'en-GB',
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
})
