import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom';

import './index.css';

import './demos/ipc';
import { ErrorPage } from './error-page';
import SideBar from './components/side-bar';
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='w-screen h-full min-h-dvh bg-purple-700'>
        <div className='flex h-full'>
          <SideBar />
          <Outlet />
        </div>
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: 'dashboard', element: <div>dash board</div> },
      { path: 'contact-us', element: <div>contact us</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
