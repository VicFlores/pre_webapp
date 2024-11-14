'use client';

import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { IAccommodationData } from '@/interfaces/IAccommodationData';
import styles from './Accommodation.module.css';

export const Accommodation: FC<{ accommodationId: string }> = ({
  accommodationId,
}) => {
  const [accommodationData, setAccommodationData] =
    useState<IAccommodationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const getAccommodation = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          `https://preapi-production.up.railway.app/accommodation/${accommodationId}`
        );

        setAccommodationData(response.data.data);

        setIsLoading(false);
      } catch (error) {
        console.error('Error getting accommodation data:', error);
      }
    };

    getAccommodation();
  }, [accommodationId]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? accommodationData!.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === accommodationData!.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.accommodationContainer}>
      <h1 className={styles.title}>Informacion sobre alojamiento</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {accommodationData && (
            <div className={styles.accommodationCard}>
              <div className={styles.accommodation}>
                <div className={styles.carousel}>
                  <button
                    onClick={handlePrevImage}
                    className={styles.carouselButton}
                  >
                    &lt;
                  </button>
                  <div className={styles.carouselImage}>
                    <Image
                      src={accommodationData.images[currentImageIndex]}
                      alt={`${accommodationData.accommodation} image`}
                      layout='fill'
                    />
                  </div>
                  <button
                    onClick={handleNextImage}
                    className={styles.carouselButton}
                  >
                    &gt;
                  </button>
                </div>

                <h2>{accommodationData.accommodation}</h2>

                <p>
                  <strong>Ubicacion</strong>: {accommodationData.location}
                </p>

                <p>
                  <strong>Tipo</strong>: {accommodationData.environment}
                </p>

                <p>
                  <strong>Calificacion</strong>: {accommodationData.stars} / 5
                </p>

                <p>
                  <strong>Comentarios</strong>
                </p>

                {accommodationData.comments.map((comment, index) => (
                  <p key={`${comment}${index}`}>{comment}</p>
                ))}
              </div>

              <div>
                <h1 className={styles.title}>Ubicacion en el mapa</h1>

                <APIProvider apiKey={'AIzaSyBiky3U5Nb8mE6tatDiMCuKgD5G0KLqX5M'}>
                  <Map
                    style={{
                      width: '80rem',
                      height: '40rem',
                      marginBottom: '5rem',
                    }}
                    defaultCenter={{
                      lat: accommodationData.latitude,
                      lng: accommodationData.longitude,
                    }} // Set the center of the map
                    defaultZoom={20} // Set zoom level to focus on the place
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                  >
                    <Marker
                      position={{
                        lat: accommodationData.latitude,
                        lng: accommodationData.longitude,
                      }}
                    />
                  </Map>
                </APIProvider>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};
