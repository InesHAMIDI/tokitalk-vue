import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {
    // create naive ui
    create,
    // component
    NButton
  } from 'naive-ui'

const naive = create({
  components: [NButton]
})

const pinia = createPinia()

createApp(App).use(createPinia())
.use(naive).use(pinia)
.mount('#app')

//App.config.globalProperties.$globalSpeech = initSpeech();
import "@fortawesome/fontawesome-free/css/all.css"

//import { initSpeech } from './audio';


