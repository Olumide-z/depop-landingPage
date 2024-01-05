"use client"

import { productData } from '@/constants/data'
import React from 'react'
import Card from './productCard/Card'
import styles from './products.module.css';

const Products = () => {

  return (
    <div className={styles.products}>
        {productData.map((product) => (
            <Card product={product} key={product.id}/>
        ))}
        
    </div>
  )
}

export default Products