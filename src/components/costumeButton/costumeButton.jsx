import React from 'react'
import styles from "./costumeButton.module.css"
export default function CostumeButton({name ,mgtop="10px",Width="100%"}) {
  return (
    <button style={{marginTop:mgtop,width:Width}} className={styles.button} >{name}</button>
  )
}
