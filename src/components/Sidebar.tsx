import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Mail } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const styles = useThemeStyles();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <nav className={styles.sidebar.container}>

      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isActive ? styles.sidebar.navItemActive : styles.sidebar.navItem
              }`}
          >
            <item.icon className="mr-3 flex-shrink-0 h-5 w-5 transition-colors" />
            {item.name}
          </Link>
        );
      })}
    </nav>

  );
};

export default Sidebar;