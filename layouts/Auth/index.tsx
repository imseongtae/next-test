import React from 'react';
import styles from './Auth.module.scss';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Auth: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['global-width']}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Auth;
