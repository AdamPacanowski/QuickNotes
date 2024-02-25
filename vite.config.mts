import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['src/assets/9057215_keyboard_icon.svg'],
      manifest: {
        name: 'Keyboard shortcuts',
        short_name: 'Keyboard',
        description: 'Application which shows keyboard shortcuts',
        theme_color: '#ffffff',
        icons: [
          {
            "src": "src/assets/9057215_keyboard_icon.svg",
            "sizes": "48x48 72x72 96x96 128x128 256x256 512x512",
            "type": "image/svg+xml",
            "purpose": "any"
        }
        ]
      },
      devOptions: {
        enabled: true,
      }
    }),
    devtools(),
    solidPlugin()
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  base: '/QuickNotes/'
});
