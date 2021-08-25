import Buefy from "buefy";
import "gridsome-plugin-remark-prismjs-all/themes/solarized.css";

import DefaultLayout from "~/layouts/default.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(Buefy);
}
