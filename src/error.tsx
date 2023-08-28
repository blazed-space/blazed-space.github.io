import React from 'react';
import ReactDOM from 'react-dom/client';

import Layout from './Layout';

import NotFound from './components/not-found';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
        <NotFound />
    </Layout>
  </React.StrictMode>,
);
