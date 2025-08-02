import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { ChevronDown, Palette, Menu, X } from 'lucide-react';
import { themeOptions } from '../config/themeConfig';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const styles = useThemeStyles();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);



  return (
    <>
      <header className={styles.header.base}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className={`flex items-center space-x-2 ${styles.header.logo}`} onClick={toggleMobileMenu}>
                <Palette className="w-6 h-6" />
                <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
                  ThemeForge
                </span>
              </Link>

              <nav className="hidden md:flex space-x-1">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/about', label: 'About' },
                  { path: '/contact', label: 'Contact' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${styles.header.nav.base} ${location.pathname === item.path
                      ? styles.header.nav.active
                      : styles.header.nav.inactive
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {/* Desktop Theme Dropdown */}
              <div className="hidden md:block relative group">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  <span className={currentTheme === 'theme3' ? 'font-["Pacifico"] text-base' : ''}>
                    {themeOptions.find(option => option.value === currentTheme)?.label}
                  </span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className={`absolute right-0 mt-2 w-48 ${styles.header.dropdown} opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2`}>
                  <div className="py-2">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentTheme === option.value
                          ? styles.mobileMenu.themeOptionActive
                          : styles.mobileMenu.themeOption
                          }`}
                      >
                        <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button

                className={`md:hidden p-2 rounded-md transition-colors ${styles.header.nav.inactive}`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (<>
                  <X className="w-6 h-6" onClick={toggleMobileMenu} />
                  <MobileMenu
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleMobileMenu={toggleMobileMenu} />
                </>
                ) : (
                  <Menu className="w-6 h-6" onClick={toggleMobileMenu} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;