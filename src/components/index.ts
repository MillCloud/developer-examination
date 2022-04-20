import { Icon } from '@iconify/vue';
// @ts-ignore
import MarkdownIt from 'vue3-markdown-it';
import 'highlight.js/styles/atom-one-light.css';
import VRouterView from './VRouterView.vue';
import VSpacer from './VSpacer.vue';
import type { Plugin } from 'vue';

const Components: Plugin = {
  install: (app) => {
    app
      .component('VIcon', Icon)
      .component('VMarkdownIt', MarkdownIt)
      .component('VRouterView', VRouterView)
      .component('VSpacer', VSpacer);
  },
};

export default Components;
