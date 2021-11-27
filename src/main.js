import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import ScrollPanel from 'primevue/scrollpanel';
import Ripple from 'primevue/ripple';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import './assets/style/global.scss';

const app = createApp(App);

app.component('ScrollPanel', ScrollPanel);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Button', Button);
app.component('InputNumber', InputNumber);
app.directive('ripple', Ripple);
app.use(PrimeVue, {ripple: true});
app.use(store);
app.use(router);
app.mount('#expenceTrackerApp')
