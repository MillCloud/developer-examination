import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import React from '@vitejs/plugin-react';
import TsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    React(),
    TsconfigPaths(),
    WindiCSS(),
    Pages({
      react: true,
    }),
  ],
  optimizeDeps: {
    include: [
      '@iconify/react',
      'antd',
      'file-saver',
      'markdown-to-jsx',
      'react',
      'react-dom',
      'react-markdown',
      'react-router',
      'react-router-config',
      'react-router-dom',
      'react-syntax-highlighter',
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
