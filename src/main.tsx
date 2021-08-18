import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from 'virtual:generated-pages-react';
import Layout from '@/layout';
import 'virtual:windi.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>{renderRoutes(routes)}</Layout>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
