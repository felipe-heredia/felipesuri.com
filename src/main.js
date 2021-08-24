import Buefy from "buefy";
import "prismjs/themes/prism.css";

import DefaultLayout from "~/layouts/default.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(Buefy);
}
