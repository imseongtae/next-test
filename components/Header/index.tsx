import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <a>
            <span className="hidden-visually">J.dit</span>
            <img src="/logo.png" alt="logo" />
          </a>
        </h1>
      </div>
    </header>
  )
};

export default Header;