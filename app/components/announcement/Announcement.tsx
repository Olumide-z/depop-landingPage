import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

import styles from './announcement.module.css'

const Announcemnet = () => {
  return (
    <div className={styles.announcement}>
      <Marquee pauseOnHover speed={60} gradient={false}>
      <div className={`${styles.announcemenText} ${styles.text1}`}>
        <span>Spend N50,000 or more for free nationwide shipping</span>
        <span>Enjoy Discount Sales. <Link href='/' className={styles.announcementLink}>shop Now</Link></span>
      </div>
      <div className={`${styles.announcemenText} ${styles.text2}`}>
        <span>Spend N50,000 or more for free nationwide shipping</span>
        <span>Enjoy Discount Sales. <Link href='/' className={styles.announcementLink}>shop Now</Link></span>
      </div>
     </Marquee>
    </div>
  )
}

export default Announcemnet