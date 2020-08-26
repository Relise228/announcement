import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <Link to='/'>Main</Link>
      <Link to='/add'>Add New</Link>
    </div>
  );
};

export default Navbar;
