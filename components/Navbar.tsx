import React from 'react';
import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const menuItem = [
  {
    text: 'Tienda',
    href: '/',
  },
  {
    text: 'Consola',
    href: '/category/consolas',
  },

  {
    text: 'Arte',
    href: '/category/arte',
  },
  // {
  //   text: 'Servicios',
  //   href: '/servicios/servicio1',
  // },
  // {
  //   text: 'Contacta',
  //   href: '/contacto',
  // },
  // {
  //   text: 'Pricing',
  //   href: '/pricing',
  // },
];

export default function Navbar() {
  return (
    <main className={styles.navbarContainer}>
      <nav className={styles.naveHeader}>
        <ul>
          {menuItem.map((item, index) => (
            <li key={index}>
              <ActiveLink text={item.text} href={item.href} className={styles.navbarLink}  />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
