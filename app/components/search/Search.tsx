import React from 'react';
import styles from './search.module.css'
import { FaSearch } from 'react-icons/fa';
import { MdClose } from "react-icons/md";

const Search = ({ handleSearchClose }: any) => {
  return (
    <div className={styles.search}>
        <button><FaSearch /></button>
        <input type="text" />
        <button onClick={handleSearchClose}><MdClose /></button>
    </div>
  )
}

export default Search