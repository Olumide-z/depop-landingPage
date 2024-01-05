import React from 'react'
import styles from './button.module.css'

interface BtnProps{
    btnText: string
}

const Button = ({ btnText }: BtnProps) => {
  return (
    <button className={styles.btn}>{btnText}</button>
  )
}

export default Button