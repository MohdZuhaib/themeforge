import React from 'react';
import { Product } from '../types';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const styles = useThemeStyles();

  return (
    <div className={styles.card.base}>
      <div className="aspect-w-16 aspect-h-12 bg-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className={styles.card.title}>
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