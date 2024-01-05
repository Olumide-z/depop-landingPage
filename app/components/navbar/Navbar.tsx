"use client"

import { navbarData} from '@/constants/data';
import styles from './navbar.module.css';
import Link from 'next/link';

import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '../tooltip/Tooltip';
import { useState } from 'react';
import Search from '../search/Search';
import Cart from '../cart/Cart';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [cartOpen, setCartOpen] = useState(false)

    const handleClick = () => setToggleMenu(!toggleMenu);

    const handleSearchOpen = () => setSearch(true)
    const handleSearchClose = () => setSearch(false)

  return (
   <nav className={styles.navBar}>
        {/* Search bar */}
        <div className={search ? styles.navBarSearchActive : styles.navBarSearch }>
            <Search handleSearchClose={handleSearchClose} />
        </div>
        <div className={styles.navContent}>
            <div className={styles.navLogo}>depop</div>
            {/* Navbar links */}
            <div className={styles.navLinks}>
                {navbarData.map((item) => (
                    <ul key={item.id}>
                        <Link href={item.link} className={styles.navLink}>
                            <li>{item.title}</li>
                        </Link>
                    </ul>

                ))}
            </div>
            {/* Navbar Icons */}
            <div className={styles.navbarIcons}>
                <ul>
                    <Tooltip text='likes'>
                        <li><FaRegHeart size={20}/></li>
                    </Tooltip>
                    <Tooltip text='search'>
                        <li onClick={handleSearchOpen}><FaSearch size={20} /></li>
                    </Tooltip>
                    <Tooltip text='cart'>
                        <li onClick={() => setCartOpen(true)}><IoCart size={20} /></li> 
                    </Tooltip>
                </ul>
            </div>
            {/* cart */}

            <div className={styles.navbarCart}>
                <div className={cartOpen ? `${styles.navbarCartContainer} ${styles.cartActive}` : `${styles.navbarCartContainer}`}>
                    <Cart setCartOpen={setCartOpen}/>
                </div>
            </div>

            {/* Navbar mobile icon */}
            <div className={styles.navbarMobile}>
                <div className={styles.navbarMobileIcon} onClick={handleClick}>
                    <div className={toggleMenu ? styles.line1 : ''}></div>
                    <div className={toggleMenu ? styles.line2 : ''}></div>
                    <div className={toggleMenu ? styles.line3 : ''}></div>
                </div>
            </div>
        </div>

        {/* Mobile Navigation */}
        {toggleMenu && (
            <div className={styles.mobileNav}>
            {navbarData.map((item) => (
                <Link href={item.link} key={item.id} className={styles.menuLinks}>
                    <li>{item.title}</li>
                </Link>
            ))}
            </div>
        )}

   </nav>
  )
}

export default Navbar