import '@/app/assets/css/global.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import { DataLoaderPlugin } from 'unplugin-vue-router/data-loaders'
import { routes } from 'vue-router/auto-routes'
import App from './app.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(DataLoaderPlugin, { router })
app.use(router)

app.use(createPinia())

app.mount('#app')
