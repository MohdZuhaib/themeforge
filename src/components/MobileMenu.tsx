import { Link } from "react-router-dom";
import { ChevronDown, Palette, X, Settings } from 'lucide-react';
import { useTheme } from "../contexts/ThemeContext";
import { themeOptions } from "../utils";
import { MobileMenuProps } from "../types";



const MobileMenu: React.FC<MobileMenuProps> = ({
    isMobileMenuOpen,
    setIsMobileThemeOpen,
    toggleMobileTheme,
    isMobileThemeOpen,
    closeMobileMenu
}) => {
    const { currentTheme, setTheme } = useTheme();

    return (
        <>
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity duration-300"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Drawer Menu */}
            <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                } ${currentTheme === 'theme1' ? 'bg-white border-l border-gray-200 shadow-2xl' :
                    currentTheme === 'theme2' ? 'bg-gray-800 border-l border-gray-700 shadow-2xl' :
                        'bg-white/95 backdrop-blur-md border-l-4 border-pink-400 shadow-2xl'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Drawer Header */}
                    <div className={`flex items-center justify-between p-6 border-b ${currentTheme === 'theme1' ? 'border-gray-200' :
                        currentTheme === 'theme2' ? 'border-gray-700' :
                            'border-pink-200'
                        }`}>
                        <div className="flex items-center space-x-3">
                            <Palette className={`w-6 h-6 ${currentTheme === 'theme1' ? 'text-blue-600' :
                                currentTheme === 'theme2' ? 'text-blue-400' :
                                    'text-pink-500'
                                }`} />
                            <span className={`text-lg font-bold ${currentTheme === 'theme2' ? 'text-gray-100' :
                                currentTheme === 'theme3' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-["Pacifico"]' :
                                    'text-gray-900'
                                }`}>
                                Menu
                            </span>
                        </div>
                        <button
                            onClick={closeMobileMenu}
                            className={`p-2 rounded-full transition-colors ${currentTheme === 'theme1' ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' :
                                currentTheme === 'theme2' ? 'text-gray-300 hover:text-white hover:bg-gray-700' :
                                    'text-gray-700 hover:text-pink-600 hover:bg-pink-100'
                                }`}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Drawer Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {/* Mobile Navigation Links */}
                        <nav className="space-y-3 mb-8">
                            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${currentTheme === 'theme2' ? 'text-gray-400' :
                                currentTheme === 'theme3' ? 'text-gray-600' :
                                    'text-gray-500'
                                }`}>
                                Navigation
                            </h3>
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/about', label: 'About' },
                                { path: '/contact', label: 'Contact' },
                            ].map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMobileMenu}
                                    className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${location.pathname === item.path
                                        ? currentTheme === 'theme1'
                                            ? 'bg-blue-100 text-blue-700 shadow-sm'
                                            : currentTheme === 'theme2'
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                        : currentTheme === 'theme1'
                                            ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                            : currentTheme === 'theme2'
                                                ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                                                : 'text-gray-700 hover:text-pink-600 hover:bg-pink-100'
                                        }`}
                                >
                                    <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Theme Selector */}
                        <div className={`border-t pt-6 ${currentTheme === 'theme1' ? 'border-gray-200' :
                            currentTheme === 'theme2' ? 'border-gray-700' :
                                'border-pink-200'
                            }`}>
                            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${currentTheme === 'theme2' ? 'text-gray-300' :
                                currentTheme === 'theme3' ? 'text-gray-600' :
                                    'text-gray-500'
                                }`}>
                                Appearance
                            </h3>

                            {/* Theme Dropdown Button */}
                            <button
                                onClick={toggleMobileTheme}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${currentTheme === 'theme1' ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' :
                                    currentTheme === 'theme2' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' :
                                        'bg-pink-100 text-gray-800 hover:bg-pink-200'
                                    }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <Settings className="w-5 h-5" />
                                    <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
                                        {themeOptions.find(option => option.value === currentTheme)?.label}
                                    </span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileThemeOpen ? 'rotate-180' : ''
                                    }`} />
                            </button>

                            {/* Theme Options */}
                            <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${isMobileThemeOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                {themeOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            setTheme(option.value);
                                            setIsMobileThemeOpen(false);
                                        }}
                                        className={`w-full text-left px-6 py-3 rounded-lg text-sm transition-all duration-200 ${currentTheme === option.value
                                            ? currentTheme === 'theme3'
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                                                : currentTheme === 'theme2'
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'bg-blue-100 text-blue-700 shadow-sm'
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

                    {/* Drawer Footer */}
                    <div className={`p-6 border-t ${currentTheme === 'theme1' ? 'border-gray-200 bg-gray-50' :
                        currentTheme === 'theme2' ? 'border-gray-700 bg-gray-900' :
                            'border-pink-200 bg-pink-50'
                        }`}>
                        <div className={`text-xs text-center ${currentTheme === 'theme2' ? 'text-gray-400' :
                            currentTheme === 'theme3' ? 'text-gray-600' :
                                'text-gray-500'
                            }`}>
                            ThemeForge v1.0
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
