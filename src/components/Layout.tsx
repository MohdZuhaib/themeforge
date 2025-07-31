import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';
import { getLayoutClasses, getMainClasses } from '../utils';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  return (
    <div className={getLayoutClasses(currentTheme)}>
      <Header />
      <main className={getMainClasses(currentTheme)}>
        {currentTheme === 'theme2' && <Sidebar />}
        <div className={currentTheme === 'theme2' ? 'flex-1 ml-0 lg:ml-64 px-4 md:px-8' : ''}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;