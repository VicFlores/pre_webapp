import React from 'react';
import styles from './AccommodationsSupport.module.css';
import Image from 'next/image';

export const AccommodationsSupport = () => {
  return (
    <section className={styles.supportContainer}>
      <h1 className={styles.title}>Nuestras ubicacion soportadas</h1>

      <p className={styles.parragraph}>
        Para poder brindarte las mejores experiencias como viajero, te mostramos{' '}
        <br />
        los lugares a los cuales tenemos soporte a nivel de El Salvador
      </p>

      <figure className={styles.supportImage}>
        <Image src='/supportPlaces.svg' alt='' layout='fill' />
      </figure>

      <h1 className={styles.title}>Ubicaciones</h1>

      <div className={styles.supportPlaces}>
        <div>
          <h2>Playas</h2>

          <ul>
            <li>Playa el Tunco</li>
            <li>Playa el Sunzal</li>
            <li>Playa el Zonte</li>
            <li>Playa el Majahual</li>
          </ul>
        </div>

        <div>
          <h2>Montañas</h2>

          <ul>
            <li>Playa el Tunco</li>
            <li>Playa el Sunzal</li>
            <li>Playa el Zonte</li>
            <li>Playa el Majahual</li>
          </ul>
        </div>

        <div>
          <h2>Lagos</h2>

          <ul>
            <li>Coatepeque</li>
            <li>Ilopango</li>
          </ul>
        </div>

        <div>
          <h2>Lagunas</h2>

          <ul>
            <li>Playa el Tunco</li>
            <li>Playa el Sunzal</li>
            <li>Playa el Zonte</li>
            <li>Playa el Majahual</li>
          </ul>
        </div>

        <div>
          <h2>Otros</h2>

          <ul>
            <li>Playa el Tunco</li>
            <li>Playa el Sunzal</li>
            <li>Playa el Zonte</li>
            <li>Playa el Majahual</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
