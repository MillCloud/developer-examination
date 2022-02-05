import { createApp } from 'vue';
import browserUpdate from 'browser-update';
import { VueQueryPlugin } from 'vue-query';
import ElementPlus, { ElCollapseTransition } from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import 'element-plus/theme-chalk/display.css';
import ElementProComponents from 'element-pro-components';
import 'element-pro-components/lib/styles/index.css';
// @ts-ignore
import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/atom-one-light.css';
import App from './App.vue';
import '@/styles/global.css';

browserUpdate({
  required: { e: 79, f: 67, o: 50, s: 12, c: 63 },
  insecure: true,
  unsupported: true,
});

createApp(App)
  .use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    },
  })
  .use(ElementPlus)
  .use(ElementProComponents)
  .use(Markdown)
  .component(ElCollapseTransition.name, ElCollapseTransition)
  .mount('#app');
