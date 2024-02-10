import Vuetify from "vuetify";
import Households from "./components/Households.vue";
import SeeSaw from "./components/SeeSaw.vue";

import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    }
  }
};
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify(opts);
  Vue.use(Households);
  Vue.use(SeeSaw);
};