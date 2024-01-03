import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
    //TODO
    plugins: [vue(),
        VitePWA({
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
            manifest: {
                name: 'My Awesome App',
                short_name: 'MyApp',
                description: 'My Awesome App description',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: "pwa-64x64.png",
                        type: "image/png",
                        purpose: "maskable"
                    }
                ]
            }
        })
    ],
})
