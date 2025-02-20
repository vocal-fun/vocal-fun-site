import { defineNuxtPlugin } from '#app';
import playClickSound from '~/directives/play-click-sound';
import viewport from '~/directives/viewport';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('play-click-sound', playClickSound);
  nuxtApp.vueApp.directive('viewport', viewport);
});
