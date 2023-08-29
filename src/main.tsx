import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";

import Layout from './Layout';

import Home from './app/home';
import About from './app/about';
import Conduct from './app/conduct';
import Journal from './app/journal';
import Contrubute from './app/contribute';
import ErrorPage from './app/error';


import './index.css';

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/code-of-conduct",
        element: <Conduct />
    },
    {
        path: "/contribute",
        element: <Contrubute />
    },
    {
        path: "/journal",
        element: <Journal />
    }
]);

/*
const worker = new Worker(new URL('./worker.js', import.meta.url), {
    type: "module"
});
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
        <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
