'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href={'/'} className={pathname === '/' ? styles.active : ''}>
        Inicio
      </Link>

      <Link
        href={'/chatbot'}
        className={pathname === '/chatbot' ? styles.active : ''}
      >
        Asistente
      </Link>

      <Link
        href={'/accommodations-support'}
        className={pathname === '/accommodations-support' ? styles.active : ''}
      >
        Ubicaciones
      </Link>
    </nav>
  );
};
