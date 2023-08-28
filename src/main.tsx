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
import Projects from './app/projects';
import Journal from './app/journal';

import './index.css';
import ErrorPage from './app/error';

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
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/journal",
        element: <Journal />
    }
]);

const worker = new Worker(new URL('./worker.js', import.meta.url), {
    type: "module"
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
        <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
