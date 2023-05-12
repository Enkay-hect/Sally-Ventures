import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuex from 'vuex'


import App from './App.vue'
import router from './router'

import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from './stores/store'

const appStore = new Vuex.Store(store)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(appStore)

app.mount('#app')
