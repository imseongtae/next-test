import React, { useEffect } from 'react';
import styles from './Default.module.scss';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Default: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['global-width']}>
        <div className={styles.container}>          
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Default;
