import React from 'react';

// Define the props interface for the ProductCard component
interface ProductCardProps {
  imageUrl: string;  // URL of the product image
  title: string;     // Title of the product
  description: string; // Description of the product
  price: string;     // Price of the product (as a string to allow for currency symbols)
}

// Define the ProductCard component as a functional component with ProductCardProps
const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description, price }) => {
  return (
    // Main container for the product card
    <div className="border rounded-lg overflow-hidden shadow-lg">
      {/* Product image */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      {/* Product information container */}
      <div className="p-4">
        {/* Product title */}
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        {/* Product description */}
        <p className="text-gray-700">{description}</p>
        {/* Product price */}
        <p className="text-secondary font-semibold mt-2">{price}</p>
        {/* Book Now button */}
        <button className="mt-4 px-4 py-2 bg-accent text-black rounded">Book Now</button>
      </div>
    </div>
  );
};

export default ProductCard;