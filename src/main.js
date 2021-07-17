import { createApp } from 'vue'
import App from './App.vue'
import svgIcon from './icon/svg.vue'

// Create a Vue3 application
const app = createApp(App)

// use SVG components
app.component('I', svgIcon)

//=> INIT
app.mount('#app')
