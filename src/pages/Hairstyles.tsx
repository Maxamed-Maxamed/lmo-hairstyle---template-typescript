import React from 'react';
import Gallery from '../components/Gallery';

const Hairstyles: React.FC = () => {
  const hairstyleProducts = [
    { imageUrl: 'https://source.unsplash.com/random/800x600?hairstyle1', title: 'Curly Hair', description: 'A beautiful curly hairstyle.', price: '$50' },
    { imageUrl: 'https://source.unsplash.com/random/800x600?hairstyle2', title: 'Straight Hair', description: 'A sleek straight hairstyle.', price: '$45' },
    { imageUrl: 'https://source.unsplash.com/random/800x600?hairstyle3', title: 'Wavy Hair', description: 'A voluminous wavy hairstyle.', price: '$55' },
    // Add more products as needed
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Hairstyles</h2>
      <Gallery products={hairstyleProducts} />
    </section>
  );
};

export default Hairstyles;