import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ReactRefresh from '@vitejs/plugin-react-refresh';
import ReactJsx from 'vite-react-jsx';
import StyleImport from 'vite-plugin-style-import';
import TsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    ReactRefresh(),
    ReactJsx(),
    TsconfigPaths(),
    WindiCSS(),
    Pages({
      react: true,
    }),
    StyleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style/index`,
        },
      ],
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1024,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
