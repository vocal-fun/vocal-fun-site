import { defineNuxtPlugin } from '#app';
import SplidePlugin from '@splidejs/vue-splide';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SplidePlugin);
});
