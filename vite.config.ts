import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import TsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      '@iconify/react',
      '@modyqyw/utils',
      'ahooks',
      'antd',
      'file-saver',
      'markdown-to-jsx',
      'react',
      'react-dom',
      'react-markdown',
      'react-router',
      'react-router-dom',
      'react-syntax-highlighter',
    ],
  },
  plugins: [React(), TsconfigPaths(), WindiCSS(), Pages()],
});
