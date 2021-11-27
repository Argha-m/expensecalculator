import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import ScrollPanel from 'primevue/scrollpanel';
import './assets/style/global.scss';

createApp(App).component('ScrollPanel', ScrollPanel).use(PrimeVue).use(store).use(router).mount('#expenceTrackerApp')
