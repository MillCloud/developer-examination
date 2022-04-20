import { createApp } from 'vue';
import browserUpdate from 'browser-update';
import { VueQueryPlugin } from 'vue-query';
import ElementPlus from 'element-plus';
import App from './App.vue';
import Components from './components';
import '@/styles/preflight.scss';
import '@/styles/element.scss';
import '@/styles/tailwind.css';
import '@/styles/global.scss';

browserUpdate({
  required: { e: 79, f: 67, o: 50, s: 12, c: 63 },
  insecure: true,
  unsupported: true,
});

createApp(App)
  .use(ElementPlus)
  .use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    },
  })
  .use(Components)
  .mount('#app');
