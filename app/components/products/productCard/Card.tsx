
import Image from 'next/image'
import React from 'react'
import styles from './card.module.css';



interface CardProps {
    product: {
        id: number, 
        name: string, 
        picture1: string, 
        picture2: string,
        price: string
    }
}

const Card = ({ product }: CardProps) => {

  return (
        <div className={styles.card}>
            {/* images */}
            
                <div className={styles.imageContainer}>
                    <Image 
                        src={product.picture1}
                        alt='shirts'
                        layout="fill"        
                        objectFit='cover'
                    />
                </div>
                {/* top */}
                <div className={styles.imageContainerTop}>
                    <Image 
                        src={product.picture2}
                        alt='shirts'
                        layout="fill"        
                        objectFit='cover'
                    />
                </div>
            
            <div className={styles.desc}>
                <h3>{product.name}</h3>
                <div>
                    <span className={styles.strikethrough}>N16,000</span>
                    <span>N{product.price}</span>
                </div>
                
            </div>
        </div>
 
  )
}

export default Card