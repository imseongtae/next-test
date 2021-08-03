import React from 'react';
import styles from './Footer.module.scss';
import { useRouter } from 'next/router';

const footerItems = [
  {
    label: '서비스 이용약관',
    href: 'https://ianlee.notion.site/796889fe60704d519b1b5c96b04e491e',
  },
  {
    label: '개인정보 처리방침',
    href: 'https://ianlee.notion.site/_-7e645340326c408f9753581da2ca252d',
  },
];

const Footer: React.FunctionComponent = () => {
  const router = useRouter();
  const isBgWhite = router.pathname === '/login';
  const isHome = router.pathname === '/';

  return (
    <footer
      className={`${styles.Footer} ${
        isBgWhite ? 'bg-white' : `${styles.others}`
      } ${isHome && `${styles.home}`}`}
    >
      <div className={styles.container}>
        <span className={`text-sm ${styles.item}`}>haemil © 2021</span>
        <ul className="flex">
          {footerItems.map((item, i) => (
            <li key={i} className={`text-sm ml-4 md:ml-16  ${styles.item}`}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
