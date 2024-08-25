import React from 'react'; // Importing the React library
import ProductCard from './ProductCard'; // Importing the ProductCard component

// Defining the type of data the Gallery component expects
interface GalleryProps {
  products: Array<{
    imageUrl: string; // URL of the product image
    title: string; // Title of the product
    description: string; // Description of the product
    price: string; // Price of the product
  }>;
}

// Defining the Gallery component which takes a list of products as input
const Gallery: React.FC<GalleryProps> = ({ products }) => {
  return (
    // Creating a grid layout that adjusts based on screen size
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Iterating over each product and creating a ProductCard for it */}
      {products.map((product, index) => (
        <ProductCard
          key={index} // Unique key for each product
          imageUrl={product.imageUrl} // Passing the image URL to ProductCard
          title={product.title} // Passing the title to ProductCard
          description={product.description} // Passing the description to ProductCard
          price={product.price} // Passing the price to ProductCard
          // No need to pass any other props
          
        />
      ))}

    </div>
  );
};

export default Gallery; // Exporting the Gallery component as the default export
