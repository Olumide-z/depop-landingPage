import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header/Header'
import TheLook from './components/shopTheLook/TheLook'
import Button from './components/button/Button'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header 
        bgImage='1.jpg'
        text='Depop Collections'
        buttonText='Available Now'
      />
      {/* Information */}
      <div className={styles.mainInfo}>
        <h3>Depop Collections</h3>
        <p>Get ready for ultimate style and comfort with our new Sweat Shirt and Pants - designed to elevate your everyday look</p>
      </div>
      {/* SHOP THE LOOK */}
      <TheLook />
      {/* Infor 2 */}
      <div className={styles.mainInfo}>
        <h2>Perfected essentials that serve as the foundation to <br/>every man's wardrobe.</h2>
      </div>
      {/* Jean and accessories */}
      <div className={styles.jeanContainer}>
      <div className={styles.jeans}>
        <div className={styles.jean}>
          <Image 
            src='/image/3.jpg' 
            alt='jean' layout='fill'
            objectFit='cover'
          />
          <div>
            <h3>Jeans</h3>
            <Button btnText='Shop now'/>
          </div>
        </div>
        <div className={styles.accessories}>
          <Image 
            src='/image/4.jpg' 
            alt='jean' layout='fill'
            objectFit='cover'
          />
          <div>
            <h3>Accessories</h3>
            <Button btnText='Shop now'/>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
      </div>
    </main>
  )
}
