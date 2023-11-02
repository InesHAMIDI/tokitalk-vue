import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {
    // create naive ui
    create,
    // component
    NButton,
    NModal,
    NCarousel,
    NSlider

  } from 'naive-ui'

const naive = create({
  components: [NButton, NModal, NCarousel, NSlider]
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(createPinia())
.use(naive).use(pinia)
.mount('#app')

import "@fortawesome/fontawesome-free/css/all.css"



