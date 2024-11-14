import React from 'react';
import { Home } from '@/components/Home/Home';
import { Navbar } from '@/components/Navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Inicio',
};

const HomePage = () => {
  return (
    <>
      <Navbar />

      <Home />
    </>
  );
};

export default HomePage;
