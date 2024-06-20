import { createApp } from "vue";
import router from "../src/router/index.js"; // Assuming you have a router setup in router/index.js
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router); // Use Vue Router
app.mount("#app");
