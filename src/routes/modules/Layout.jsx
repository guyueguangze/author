import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Layout from '@/pages/Layout'
import LazyLoad from '../utils/LazyLoad'
// https://hanlab.mit.edu/
export const UserLayoutRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
      },

      // {
      //   path: '/test',
      //   element: LazyLoad(React.lazy(() => import('@/pages/Test'))),
      // },
    ],
  },
]
