import React from 'react'
import styles from "./costumeButton.module.css"
export default function costumeButton({name ,mgtop="10px"}) {
  return (
    <button style={{marginTop:mgtop}} className={styles.button}>{name}</button>
  )
}
