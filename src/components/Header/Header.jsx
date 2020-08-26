import React from 'react';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Announcement Website</div>
      <Navbar />
    </div>
  );
};

export default Header;
