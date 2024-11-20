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
            <li>El Zapote</li>
            <li>Barra de Santiago</li>
            <li>Los Cobanos</li>
            <li>Miravalle</li>
            <li>Mizata</li>
            <li>Taquilo</li>
            <li>El Zonte</li>
            <li>Atami</li>
            <li>Xanadu</li>
            <li>Sol y Mar</li>
            <li>El Aunzal</li>
            <li>El Tunco</li>
          </ul>
        </div>

        <div>
          <h2>Montañas</h2>

          <ul>
            <li>Cerro Verde</li>
            <li>San Lorenzo</li>
            <li>Azacualpa</li>
            <li>Apaneca</li>
            <li>Juayúa</li>
            <li>Salcoatitan</li>
            <li>Perquin</li>
            <li>San Fernando</li>
            <li>Santa Rosa de Lima</li>
            <li>Miramundo</li>
          </ul>
        </div>

        <div>
          <h2>Lagos</h2>

          <ul>
            <li>Coatepeque</li>
            <li>Ilopango</li>
            <li>Suchitoto</li>
            <li>Suchitlán</li>
          </ul>
        </div>

        <div>
          <h2>Otros</h2>

          <ul>
            <li>El Congo</li>
            <li>Santa Ana</li>
            <li>San Pedro Perulapan</li>
            <li>Camino a Candelaria</li>
            <li>San Francisco Chinameca</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
