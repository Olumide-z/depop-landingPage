import React from 'react'
import styles from './header.module.css'
import Image from 'next/image';
import Button from '../button/Button';

import 'animate.css'

interface HeaderProps {
    bgImage?: string;
    text?: string;
    buttonText: string
}

const Header = ({ bgImage, text, buttonText }: HeaderProps) => {
  return (
    <div className={styles.header}>
       <div className={styles.headerBackground}>
            <Image  
                src={`/image/${bgImage}`} alt='background'
                layout="fill"        
                objectFit='cover'
            />
        </div>
        <div className={styles.headerInfo}>
            <h3>{text}</h3>
            <Button btnText={buttonText}/>
        </div>
    </div>
  )
}

export default Header