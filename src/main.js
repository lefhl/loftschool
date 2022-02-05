import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { dragscrollNext } from 'vue-dragscroll'

const app = createApp(App)

app.use(router)
app.use(store)
app.directive('dragscroll', dragscrollNext)

app.mount('#app')
