import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'

const app = createApp(App)

loadFonts()
axios.defaults.baseURL = 'http://localhost:8080'
app.config.globalProperties.axios = axios
app.use(router).use(store).use(vuetify).mount('#app')