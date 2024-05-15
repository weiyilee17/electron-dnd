import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, NavLink, Navigate } from 'react-router-dom';

import './index.css';

import './demos/ipc';
import { ErrorPage } from './error-page';
import SideBar from './components/side-bar';
import DashBoard from './components/dashboard';
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='w-screen bg-purple-700 flex gap-4 h-svh'>
        <div className='basis-24'>
          <SideBar />
        </div>
        <div className='grow overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Navigate to={'/dashboard'} />, index: true },
      { path: 'dashboard', element: <DashBoard /> },
      { path: 'contact-us', element: <div>contact us</div> },
      { path: 'user', element: <div>user</div> },
      { path: 'settings', element: <div>settings</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
