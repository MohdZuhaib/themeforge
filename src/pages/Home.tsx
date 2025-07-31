import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { Loader2, AlertCircle, Sparkles, Zap, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading, error } = useProducts();

  const getContainerClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'max-w-7xl mx-auto py-8';
      case 'theme2':
        return 'max-w-6xl mx-auto py-8';
      case 'theme3':
        return 'max-w-7xl mx-auto py-12';
      default:
        return 'max-w-7xl mx-auto py-8';
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center';
      case 'theme2':
        return 'text-4xl md:text-5xl font-bold text-gray-100 mb-6 text-center';
      case 'theme3':
        return 'text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-8 text-center font-["Pacifico"] leading-tight';
      default:
        return 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center';
    }
  };

  const getSubtitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto';
      case 'theme2':
        return 'text-xl text-gray-300 mb-8 text-center max-w-3xl mx-auto';
      case 'theme3':
        return 'text-2xl text-gray-800 mb-12 text-center max-w-3xl mx-auto font-bold';
      default:
        return 'text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto';
    }
  };

  const getGridClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      case 'theme2':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      case 'theme3':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  const getFeatureClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow';
      case 'theme2':
        return 'bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6 text-center hover:shadow-xl transition-shadow';
      case 'theme3':
        return 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 p-8 text-center hover:shadow-2xl hover:bg-white transition-all hover:scale-105';
      default:
        return 'bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow';
    }
  };

  const getLoadingClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'flex items-center justify-center py-12 text-gray-600';
      case 'theme2':
        return 'flex items-center justify-center py-12 text-gray-300';
      case 'theme3':
        return 'flex items-center justify-center py-12 text-pink-600';
      default:
        return 'flex items-center justify-center py-12 text-gray-600';
    }
  };

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
      <div className={getContainerClasses()}>
        <div className={getLoadingClasses()}>
          <Loader2 className="w-8 h-8 animate-spin mr-3" />
          <span className="text-lg">Loading amazing products...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={getContainerClasses()}>
        <div className="flex items-center justify-center py-12 text-red-600">
          <AlertCircle className="w-8 h-8 mr-3" />
          <span className="text-lg">Error loading products: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={getContainerClasses()}>
      <div className="mb-16">
        <h1 className={getTitleClasses()}>
          Welcome to ThemeForge
        </h1>
        
        <p className={getSubtitleClasses()}>
          Discover the power of dynamic theming with our cutting-edge multi-theme application. 
          Switch between three unique experiences and see how design transforms functionality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className={getFeatureClasses()}>
              <feature.icon className={`w-12 h-12 mx-auto mb-4 ${
                currentTheme === 'theme1' ? 'text-blue-600' :
                currentTheme === 'theme2' ? 'text-blue-400' :
                'text-pink-500'
              }`} />
              <h3 className={`text-lg font-semibold mb-2 ${
                currentTheme === 'theme2' ? 'text-gray-100' :
                currentTheme === 'theme3' ? 'text-gray-800 font-["Pacifico"]' :
                'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${
                currentTheme === 'theme2' ? 'text-gray-300' :
                currentTheme === 'theme3' ? 'text-gray-700' :
                'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-6 text-center ${
          currentTheme === 'theme1' ? 'text-gray-900' :
          currentTheme === 'theme2' ? 'text-gray-100' :
          'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-["Pacifico"]'
        }`}>
          Featured Products
        </h2>
      </div>

      <div className={getGridClasses()}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;