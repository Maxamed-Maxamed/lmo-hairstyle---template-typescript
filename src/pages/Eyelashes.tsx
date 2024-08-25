import React from 'react';
import Gallery from '../components/Gallery';

const Eyelashes: React.FC = () => {
  const eyelashProducts = [
    { imageUrl: 'https://source.unsplash.com/random/800x600?eyelash1', title: 'Natural Lashes', description: 'Natural-looking eyelashes.', price: '$20' },
    { imageUrl: 'https://source.unsplash.com/random/800x600?eyelash2', title: 'Dramatic Lashes', description: 'Bold and dramatic eyelashes.', price: '$25' },
    { imageUrl: 'https://source.unsplash.com/random/800x600?eyelash3', title: 'Classic Lashes', description: 'Classic and classic eyelashes.', price: '$15' },
    // Add more products as needed
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Eyelashes</h2>
      <Gallery products={eyelashProducts} />
    </section>
  );
};

export default Eyelashes;