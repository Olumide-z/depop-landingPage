"use client"

import { TooltipsProps } from '@/types';
import React, { useState } from 'react'
import styles from './tooltip.module.css';

const Tooltip = ({ text, children } : TooltipsProps ) => {
    const [isVisible, setIsVisible] = useState(false);


  return (
    <div
        className={styles.tooltip}
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
    >
        {children}
        {isVisible && <span>{text}</span>}
    </div>
  )
}

export default Tooltip