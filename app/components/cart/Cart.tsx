import React from 'react'
import styles from './cart.module.css'

import { MdOutlineClose } from "react-icons/md";

const Cart = ({ setCartOpen }: any) => {
  return (
    <div className={styles.cart}>
       <div className={styles.cartTitle}>
        <h4>CART</h4>
        <MdOutlineClose
          className={styles.cartTitleIcon}
          onClick={() => setCartOpen(false)}
        />
      </div>
    </div>
  )
}

export default Cart