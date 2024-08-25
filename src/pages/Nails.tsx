import React from 'react';
import Gallery from '../components/Gallery';

const Nails: React.FC = () => {
  const nailProducts = [
    { imageUrl: 'https://source.unsplash.com/random/800x600?nail1', title: 'French Manicure', description: 'A classic French manicure.', price: '$25' },
    { imageUrl: 'https://source.unsplash.com/random/800x600?nail2', title: 'Artistic Nails', description: 'Creative and artistic nail designs.', price: '$30' },
    { imageUrl: 'https://source.unsplash.com/random/800x600?nail3', title: 'Classic Nails', description: 'Classic and classic nail designs.', price: '$20' },
    // Add more products as needed
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Nails</h2>
      <Gallery products={nailProducts} />
    </section>
  );
};

export default Nails;