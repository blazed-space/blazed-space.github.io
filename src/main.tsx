import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";

import Layout from './Layout';

import Home from './app/home';
import About from './app/about';

import './index.css';

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
        <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
)
