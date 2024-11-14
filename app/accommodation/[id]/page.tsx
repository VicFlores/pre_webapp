import React from 'react';
import { Accommodation } from '@/components/Accommodation/Accommodation';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Detalles de alojamiento',
  description: 'Detalles de alojamiento',
};

const AccommodationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const accommodationId = (await params).id;

  return (
    <>
      <Navbar />

      <Accommodation accommodationId={accommodationId} />
    </>
  );
};

export default AccommodationPage;
