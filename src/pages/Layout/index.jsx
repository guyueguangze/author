import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import styles from './index.module.scss'
export default function Layout() {
  const menus = [
    {
      label: 'Home',
      path: '/home',
    },
  ]
  return (
    <div className={styles.root}>
      <Header menus={menus}></Header>
      <Content>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </Content>
      <Footer></Footer>
    </div>
  )
}
