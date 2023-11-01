import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- import router
import store from './store' // <-- import store

createApp(App).use(router).use(store).mount('#app') // <-- use router and store