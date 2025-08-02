import React from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { Loader2, AlertCircle, Sparkles, Zap, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const styles = useThemeStyles();
  const { products, loading, error } = useProducts();

  const features = [
    {
      icon: Sparkles,
      title: 'Dynamic Themes',
      description: 'Experience three completely different layouts and styles that transform your entire browsing experience.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern React and optimized for performance across all devices and screen sizes.'
    },
    {
      icon: Heart,
      title: 'User Centered',
      description: 'Thoughtfully designed with accessibility and user experience as our top priorities.'
    }
  ];

  if (loading) {
    return (
      <div className={styles.layout}>
        <div className={styles.loading.container}>
          <Loader2 className={styles.loading.spinner} />
          <span className={styles.loading.text}>Loading amazing products...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.layout}>
        <div className={styles.error.container}>
          <AlertCircle className="w-8 h-8 mr-3" />
          <span className={styles.error.text}>Error loading products: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <div className="mb-16">
        <h1 className={styles.typography.h1}>
          Welcome to ThemeForge
        </h1>

        <p className={styles.typography.body}>
          Discover the power of dynamic theming with our cutting-edge multi-theme application.
          Switch between three unique experiences and see how design transforms functionality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className={styles.card.feature}>
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-current" />
              <h3 className={styles.typography.h3}>
                {feature.title}
              </h3>
              <p className={styles.typography.caption}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className={styles.typography.h2}>
          Featured Products
        </h2>
      </div>

      <div className={styles.contentWrapper}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
