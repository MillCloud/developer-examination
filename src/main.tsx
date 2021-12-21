import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.variable.min.css';
import { HashRouter, useRoutes } from 'react-router-dom';
import '@/styles/global.css';
import routes from '~react-pages';
import Layout from '@/layouts';

function App() {
  return useRoutes(routes);
}

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <HashRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <App />
        </Layout>
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
