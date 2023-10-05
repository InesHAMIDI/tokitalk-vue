import { createApp } from 'vue'
import App from './App.vue'
import '@/registerServiceWorker';

/* import font awesome icon component */

createApp(App).mount('#app')
App.config.globalProperties.$speech = new SpeechSynthesisUtterance();
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.css"
