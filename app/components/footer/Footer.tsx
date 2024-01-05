import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.footer__logo}>
        <h1>depop</h1>
      </div>

      <div className={styles.footer__info}>
        <div className={styles.footer__info_col1}>
          <h4>Shop</h4>
          <Link className={styles.link} href='/'><p>Shirts</p></Link>
          <Link className={styles.link} href='/'><p>Gift Cards</p></Link>
        </div>
        <div className={styles.footer__info_col2}>
          <h4>#essentials</h4>
          <Link className={styles.link} href='/'><p>Our Story</p></Link>
          <Link className={styles.link} href='/'><p>FAQ</p></Link>
          <Link className={styles.link} href='/'><p>Refund Policy</p></Link>
          <Link className={styles.link} href='/'><p>Terms of Service</p></Link>
          <Link className={styles.link} href='/'><p>Privacy Policy</p></Link>
        </div>
        <div className={styles.footer__info_col3}> {/* Corrected the typo here */}
          <h4>Social</h4>
          <p>Stay current with updates from our <br /> social channels.</p>
          <div className={styles.footer__info_col3_socials}>
            <FaInstagram className={styles.icon}/>
            <FaFacebookSquare className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div>
        </div>
        <div className={styles.footer__info_col4}>
          <h4>Newsletter</h4>
          <p>Subscribe to get special offers, free <br /> giveaways, and early access new <br /> pieces.</p>
          <div className={styles.footer__info_col4_form}>
            <input type="text" placeholder='email@newsletter.com'/>
            <button>Join</button>
          </div>
        </div>
      </div>

      <div className={styles.footer__links}>
        <Link className={styles.link} href='/'><p>&copy; OLUMIDE 2024</p></Link>
        <Link className={styles.link} href="/"><p>OUR STORY</p></Link>
        <Link className={styles.link} href="/"><p>FAQ</p></Link>
        <Link className={styles.link} href="/"><p>REFUND POLICY</p></Link>
        <Link className={styles.link} href="/"><p>TERMS OF SERVICE</p></Link>
        <Link className={styles.link} href="/"><p>PRIVACY POLICY</p></Link>
      </div>

    </div>
  );
};

export default Footer;
