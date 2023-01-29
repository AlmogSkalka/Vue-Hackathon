import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// v-calendar imports
import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";
// createApp(App).mount('#app')
const app = createApp(App);

// v-calendar plugin init
app.use(VCalendar, {});

app.mount("#app");
