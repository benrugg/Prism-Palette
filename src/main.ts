import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { VueFire, VueFireAuth, VueFireFirestoreOptionsAPI } from 'vuefire'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'
import { firebaseApp } from '@/db/firebase'
import App from '@/App.vue'
import router from '@/router'
// @ts-ignore: Buefy doesn't have a typescript definition file
import { Checkbox, Field, Icon, Input, Loading, Select, Toast } from 'buefy'
// Button,
// Carousel,
// Checkbox,
// Collapse,
// Datepicker,
// Datetimepicker,
// Dialog,
// Dropdown,
// Field,
// Icon,
// Input,
// Loading,
// Menu,
// Modal,
// Navbar,
// Pagination,
// Select,
// Sidebar,
// Skeleton,
// Switch,
// Table,
// Tabs,
// Toast
// Tooltip

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueFire, {
  firebaseApp: firebaseApp,
  // modules: [VueFireAuth(), VueFireFirestoreOptionsAPI()]
  modules: [VueFireFirestoreOptionsAPI()]
})

// app.use(Button)
// app.use(Carousel)
app.use(Checkbox)
// app.use(Collapse)
// app.use(Datepicker)
// app.use(Datetimepicker)
// app.use(Dialog)
// app.use(Dropdown)
app.use(Field)
app.use(Icon)
app.use(Input)
app.use(Loading)
// app.use(Menu)
// app.use(Modal)
// app.use(Navbar)
// app.use(Pagination)
app.use(Select)
// app.use(Sidebar)
// app.use(Skeleton)
// app.use(Switch)
// app.use(Table)
// app.use(Tabs)
app.use(Toast)
// app.use(Tooltip)

app.mount('#app')
