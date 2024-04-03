import React from 'react'
import styles from './index.module.scss'
export default function Title({ title, size, mt }) {
  return (
    <div style={{ fontSize: size, marginTop: mt }} className={styles.root}>
      {title}
    </div>
  )
}
