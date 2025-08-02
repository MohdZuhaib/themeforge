import React from 'react';
import { Product } from '../types';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { Star, ShoppingCart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const { currentTheme } = useTheme();
  const styles = useThemeStyles();
  const isTheme3 = currentTheme === 'theme3';

  console.log('currentTheme', currentTheme)
  return (
    <div className={styles.card.base}>
      <div
        className={`bg-gray-200 w-full flex items-center justify-center shrink-0 ${!isTheme3 ? 'md:w-[180px] h-[180px]' : ''
          }`}
      >
        <img
          src={product.image}
          alt={product.title}
          className={`object-contain h-[160px] w-[160px]`}
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className={`${styles.card.title} min-h-[4.5rem]`}>
          {product.title}
        </h3>

        <p className={styles.card.description}>
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className={styles.card.price}>
            ${product.price}
          </span>

          <div className={styles.card.rating}>
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className={styles.typography.caption}>
              {product.rating.rate}
            </span>
            <span className={styles.typography.caption}>
              ({product.rating.count})
            </span>
          </div>
        </div>

        <button className={styles.button.primary}>
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;