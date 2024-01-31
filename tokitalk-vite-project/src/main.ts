import {createApp} from 'vue'
import './style.css'
import App from "./App.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {pinia} from "./stores/store.ts";


/* add all icons to the library */
library.add(fas, far)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)

app.mount('#app')
