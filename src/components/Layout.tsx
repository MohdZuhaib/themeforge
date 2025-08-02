import React, { ReactNode } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();
  const styles = useThemeStyles();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {currentTheme === 'theme2' && <Sidebar />}
        <div className={currentTheme === 'theme2' ? 'flex-1 ml-0 lg:ml-64 px-4 md:px-8' : ''}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
