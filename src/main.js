import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import ScrollPanel from 'primevue/scrollpanel'
import Toolbar from 'primevue/toolbar'
import PanelMenu from 'primevue/panelmenu'
import Ripple from 'primevue/ripple'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.use(createPinia())
app.use(router)

app.directive('ripple', Ripple)

app.component('p-button', Button)
app.component('p-scroll-panel', ScrollPanel)
app.component('p-toolbar', Toolbar)
app.component('p-panel-menu', PanelMenu)
app.component('p-datatable', DataTable)
app.component('p-column', Column)
app.component('p-rating', Rating)
app.component('p-tag', Tag)

app.mount('#app')
