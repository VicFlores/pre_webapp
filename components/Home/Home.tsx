import React from 'react';
import styles from './Home.module.css';
import Image from 'next/image';

export const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Sistema de recomendación de alojamientos turísticos <br />
        con visualización en mapa y asistente virtual
      </h1>

      <p className={styles.parragraph}>
        Este sistema es una herramienta digital diseñada para ayudar a los{' '}
        <br />
        viajeros a conocer el alojamiento ideal para sus vacaciones
      </p>

      <figure className={styles.imageContainer}>
        <Image src='/travelers.svg' alt='travelers' layout='fill' />
      </figure>
    </main>
  );
};
