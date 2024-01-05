import Image from 'next/image'
import React from 'react'

import styles from './theLook.module.css'
import Products from '../products/Products'

const TheLook = () => {
  return (
    <div className={styles.look}>
        <div className={styles.lookImage}>
            <img src='/image/2.jpg' />
        </div>
        <div className={styles.lookSlider}>
            <h3>SHOP THE LOOK (NEW YEAR DEALS)</h3>
            
              <Products />
              <p>See more hot deals</p>
        </div>
    </div>
  )
}

export default TheLook