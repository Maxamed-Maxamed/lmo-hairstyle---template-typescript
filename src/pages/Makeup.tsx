import React from 'react';
import Gallery from '../components/Gallery';

const Makeup: React.FC = () => {
  const makeupProducts = [
    { imageUrl: 'https://source.unsplash.com/random/800x600?makeup1', title: 'Evening Glam', description: 'A stunning evening glam look.', price: '$40' },
    { imageUrl: 'https://source.unsplash.com/random/800x600?makeup2', title: 'Natural Look', description: 'A subtle and natural makeup look.', price: '$35' },
    { imageUrl: 'https://source.unsplash.com/random/800x600?makeup3', title: 'Classic Makeup', description: 'A classic and classic makeup look.', price: '$30' },
    // Add more products as needed
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Makeup</h2>
      <Gallery products={makeupProducts} />
    </section>
  );
};

export default Makeup;