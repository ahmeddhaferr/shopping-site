import React from 'react'
import styles from "./container.module.css"

export default function container({children}) {
  return (
    <div className={styles.container}> 
        {children}
    </div>
  )
}
