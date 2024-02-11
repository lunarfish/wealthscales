import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import "./css/overrides.css";

import Households from "./components/Households.vue";
import SeeSaw from "./components/SeeSaw.vue";
import Introduction from "./components/Introduction.vue";
import OneMillion from "./components/OneMillion.vue";
import TwoMillion from "./components/TwoMillion.vue";
import FiveMillion from "./components/FiveMillion.vue";
import HundredMillion from "./components/HundredMillion.vue";
import OneBillion from './components/OneBillion.vue';
import TowerBlock from './components/TowerBlock.vue';
import ThirtyFiveBillion from './components/ThirtyFiveBillion.vue';
import Town from './components/Town.vue';
import TwoHundredBillionaires from './components/TwoHundredBillionaires.vue';
import TwentyEightMillionHouseholds from './components/TwentyEightMillionHouseholds.vue';
import ThreeThousandMillionaires from './components/ThreeThousandMillionaires.vue';
import Conclusion from './components/Conclusion.vue';
import Notes from './components/Notes.vue';

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
  Vue.use(Introduction);
  Vue.use(OneMillion);
  Vue.use(TwoMillion);
  Vue.use(FiveMillion);
  Vue.use(HundredMillion);
  Vue.use(OneBillion);
  Vue.use(TowerBlock);
  Vue.use(ThirtyFiveBillion);
  Vue.use(Town);
  Vue.use(TwoHundredBillionaires);
  Vue.use(TwentyEightMillionHouseholds);
  Vue.use(ThreeThousandMillionaires);
  Vue.use(Conclusion);
  Vue.use(Notes);
};