import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from 'virtual:generated-pages-react';
import Layout from '@/layout';
import 'ress';
import 'virtual:windi.css';

console.log('routes', routes);

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <BrowserRouter>
        <Layout>{renderRoutes(routes)}</Layout>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
