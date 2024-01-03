import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import {
    // create naive ui
    create,
    // component
    NButton
} from 'naive-ui'
import App from "./App.vue";

const pinia = createPinia()
const naive = create({
    components: [NButton]
})
const app = createApp(App)
app.use(pinia)
app.use(naive)
app.mount('#app')
