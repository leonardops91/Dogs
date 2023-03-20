
import React from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

function Header(props) {
    return (
      <div className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <Link to="/" className={styles.logo} aria-label="Dogs - Home">
            <Dogs />
          </Link>
          <Link to="/login" className={styles.login}>Sign In</Link>
        </nav>
      </div>
    );
}

export default Header;