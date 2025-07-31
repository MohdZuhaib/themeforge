import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ChevronDown, Palette, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { getDropdownClasses, getHeaderClasses, getLogoClasses, getNavLinkClasses, themeOptions } from '../utils';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileThemeOpen, setIsMobileThemeOpen] = React.useState(false);




  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setIsMobileThemeOpen(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileThemeOpen(false);
  }, []);

  const toggleMobileTheme = useCallback(() => {
    setIsMobileThemeOpen(prev => !prev);
  }, []);

  const mobileMenuProps = {
    isMobileMenuOpen, setIsMobileThemeOpen, toggleMobileTheme, isMobileThemeOpen, closeMobileMenu
  }
  return (
    <>
      <header className={getHeaderClasses(currentTheme)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className={`flex items-center space-x-2 ${getLogoClasses(currentTheme)}`} onClick={closeMobileMenu}>
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
                    className={getNavLinkClasses({ isActive: location.pathname === item.path, currentTheme })}
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

                <div className={`absolute right-0 mt-2 w-48 ${getDropdownClasses(currentTheme)} opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2`}>
                  <div className="py-2">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentTheme === option.value
                          ? currentTheme === 'theme3'
                            ? 'bg-pink-100 text-pink-700 font-semibold'
                            : currentTheme === 'theme2'
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-100 text-blue-700'
                          : currentTheme === 'theme3'
                            ? 'hover:bg-pink-50 text-gray-700'
                            : currentTheme === 'theme2'
                              ? 'hover:bg-gray-700 text-gray-300'
                              : 'hover:bg-gray-100 text-gray-700'
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
                onClick={toggleMobileMenu}
                className={`md:hidden p-2 rounded-md transition-colors ${currentTheme === 'theme1' ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' :
                  currentTheme === 'theme2' ? 'text-gray-300 hover:text-white hover:bg-gray-700' :
                    'text-gray-700 hover:text-pink-600 hover:bg-pink-100'
                  }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu {...mobileMenuProps} />
    </>
  );
};

export default Header;