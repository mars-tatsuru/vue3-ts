import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from './store/store'

// import './assets/main.css'

createApp(App).use(store, key).mount("#app");
