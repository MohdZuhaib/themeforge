import React from 'react';
import { Product } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { Star, ShoppingCart } from 'lucide-react';
import { getButtonClasses, getCardClasses, getDescriptionClasses, getPriceClasses, getTitleClasses } from '../utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();



  return (
    <div className={getCardClasses(currentTheme)}>
      <div className="aspect-w-16 aspect-h-12 bg-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className={getTitleClasses(currentTheme)}>
          {product.title}
        </h3>

        <p className={getDescriptionClasses(currentTheme)}>
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className={getPriceClasses(currentTheme)}>
            ${product.price}
          </span>

          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className={currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-600'}>
              {product.rating.rate}
            </span>
            <span className={currentTheme === 'theme2' ? 'text-gray-400' : 'text-gray-400'}>
              ({product.rating.count})
            </span>
          </div>
        </div>

        <button className={getButtonClasses(currentTheme)}>
          <ShoppingCart className="w-4 h-4" />
          <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;