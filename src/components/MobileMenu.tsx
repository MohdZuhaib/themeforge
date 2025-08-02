// import { Link } from "react-router-dom";
// import { ChevronDown, Palette, X, Settings } from 'lucide-react';
// import { useTheme } from "../contexts/ThemeContext";
// import { themeOptions } from "../utils";
// import { MobileMenuProps } from "../types";
// import { useThemeStyles } from "../hooks/useThemeStyles";
// import { useState } from "react";

// const MobileMenu: React.FC<MobileMenuProps> = ({
//     isMobileMenuOpen,
//     toggleMobileMenu,
// }) => {
//     const [themeDropDown, setThemeDropdown] = useState(false)
//     const { currentTheme, setTheme } = useTheme();
//     const styles = useThemeStyles();
//     const toggleDropdown = () => setThemeDropdown(prev => !prev)

//     return (
//         <>
//             {/* Mobile Menu Overlay */}
//             {isMobileMenuOpen && (
//                 <div
//                     className={styles.mobileMenu.overlay}
//                     onClick={toggleMobileMenu}
//                 />
//             )}

//             {/* Mobile Drawer Menu */}
//             <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//                 } ${styles.mobileMenu.drawer}`}>
//                 <div className="flex flex-col h-full test-here">
//                     {/* Drawer Header */}
//                     <div className={`flex items-center justify-between p-6 border-b ${styles.mobileMenu.header}`}>
//                         <div className="flex items-center space-x-3">
//                             <Palette className={`w-6 h-6 ${currentTheme === 'theme1' ? 'text-blue-600' :
//                                 currentTheme === 'theme2' ? 'text-blue-400' :
//                                     'text-pink-500'
//                                 }`} />
//                             <span className={`text-lg font-bold ${currentTheme === 'theme2' ? 'text-gray-100' :
//                                 currentTheme === 'theme3' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-["Pacifico"]' :
//                                     'text-gray-900'
//                                 }`}>
//                                 Menu
//                             </span>
//                         </div>
//                         <button
//                             onClick={toggleMobileMenu}
//                             className={`p-2 rounded-full transition-colors ${currentTheme === 'theme1' ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' :
//                                 currentTheme === 'theme2' ? 'text-gray-300 hover:text-white hover:bg-gray-700' :
//                                     'text-gray-700 hover:text-pink-600 hover:bg-pink-100'
//                                 }`}
//                         >
//                             <X className="w-5 h-5" />
//                         </button>
//                     </div>

//                     {/* Drawer Content */}
//                     <div className="flex-1 overflow-y-auto p-6">
//                         {/* Mobile Navigation Links */}
//                         <nav className="space-y-3 mb-8">
//                             <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${currentTheme === 'theme2' ? 'text-gray-400' :
//                                 currentTheme === 'theme3' ? 'text-gray-600' :
//                                     'text-gray-500'
//                                 }`}>
//                                 Navigation
//                             </h3>
//                             {[
//                                 { path: '/', label: 'Home' },
//                                 { path: '/about', label: 'About' },
//                                 { path: '/contact', label: 'Contact' },
//                             ].map((item) => (
//                                 <Link
//                                     key={item.path}
//                                     to={item.path}
//                                     onClick={toggleMobileMenu}
//                                     className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${location.pathname === item.path
//                                         ? styles.mobileMenu.navItemActive
//                                         : styles.mobileMenu.navItem
//                                         }`}
//                                 >
//                                     <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
//                                         {item.label}
//                                     </span>
//                                 </Link>
//                             ))}
//                         </nav>

//                         {/* Mobile Theme Selector */}
//                         <div className={`border-t pt-6 ${styles.utils.border}`}>
//                             <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${currentTheme === 'theme2' ? 'text-gray-300' :
//                                 currentTheme === 'theme3' ? 'text-gray-600' :
//                                     'text-gray-500'
//                                 }`}>
//                                 Appearance
//                             </h3>

//                             {/* Theme Dropdown Button */}
//                             <button
//                                 onClick={toggleDropdown}
//                                 className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${styles.mobileMenu.themeButton}`}
//                             >
//                                 <div className="flex items-center space-x-3">
//                                     <Settings className="w-5 h-5" />
//                                     <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
//                                         {themeOptions.find(option => option.value === currentTheme)?.label}
//                                     </span>
//                                 </div>
//                                 <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${themeDropDown ? 'rotate-180' : ''}`} />
//                             </button>

//                             {/* Theme Options */}
//                             <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${themeDropDown ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
//                                 }`}>
//                                 {themeOptions.map((option) => (
//                                     <button
//                                         key={option.value}
//                                         onClick={() => {
//                                             setTheme(option.value);
//                                             toggleMobileMenu();
//                                         }}
//                                         className={`w-full text-left px-6 py-3 rounded-lg text-sm transition-all duration-200 ${currentTheme === option.value
//                                             ? styles.mobileMenu.themeOptionActive
//                                             : styles.mobileMenu.themeOption
//                                             }`}
//                                     >
//                                         <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
//                                             {option.label}
//                                         </span>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Drawer Footer */}
//                     <div className={`p-6 border-t ${styles.mobileMenu.header} ${currentTheme === 'theme1' ? 'bg-gray-50' :
//                         currentTheme === 'theme2' ? 'bg-gray-900' :
//                             'bg-pink-50'
//                         }`}>
//                         <div className={`text-xs text-center ${currentTheme === 'theme2' ? 'text-gray-400' :
//                             currentTheme === 'theme3' ? 'text-gray-600' :
//                                 'text-gray-500'
//                             }`}>
//                             ThemeForge v1.0
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MobileMenu;

import { Link } from "react-router-dom";
import { ChevronDown, Palette, X, Settings } from 'lucide-react';
import { useTheme } from "../contexts/ThemeContext";
import { themeOptions } from "../utils";
import { MobileMenuProps } from "../types";
import { useThemeStyles } from "../hooks/useThemeStyles";
import { useState } from "react";

const MobileMenu: React.FC<MobileMenuProps> = ({
    isMobileMenuOpen,
    toggleMobileMenu,
}) => {
    const [themeDropDown, setThemeDropdown] = useState(false)
    const { currentTheme, setTheme } = useTheme();
    const styles = useThemeStyles();
    const toggleDropdown = () => setThemeDropdown(prev => !prev)

    return (
        <>
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className={styles.mobileMenu.overlay}
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Mobile Drawer Menu */}
            <div className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } ${currentTheme === 'theme3'
                    ? 'bg-white border-l-4 border-pink-400 shadow-2xl'
                    : styles.mobileMenu.drawer
                }`}>
                <div className="flex flex-col h-full">
                    {/* Drawer Header */}
                    <div className={`flex items-center justify-between p-6 border-b ${styles.mobileMenu.header}`}>
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
                            onClick={toggleMobileMenu}
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
                                    onClick={toggleMobileMenu}
                                    className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${window.location.pathname === item.path
                                        ? styles.mobileMenu.navItemActive
                                        : styles.mobileMenu.navItem
                                        }`}
                                >
                                    <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Theme Selector */}
                        <div className={`border-t pt-6 ${styles.utils.border}`}>
                            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${currentTheme === 'theme2' ? 'text-gray-300' :
                                currentTheme === 'theme3' ? 'text-gray-600' :
                                    'text-gray-500'
                                }`}>
                                Appearance
                            </h3>

                            {/* Theme Dropdown Button */}
                            <button
                                onClick={toggleDropdown}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${styles.mobileMenu.themeButton}`}
                            >
                                <div className="flex items-center space-x-3">
                                    <Settings className="w-5 h-5" />
                                    <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
                                        {themeOptions.find(option => option.value === currentTheme)?.label}
                                    </span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${themeDropDown ? 'rotate-180' : ''
                                    }`} />
                            </button>

                            {/* Theme Options */}
                            <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${themeDropDown ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                {themeOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            setTheme(option.value);
                                            setThemeDropdown(false);
                                        }}
                                        className={`w-full text-left px-6 py-3 rounded-lg text-sm transition-all duration-200 ${currentTheme === option.value
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

                    {/* Drawer Footer */}
                    <div className={`p-6 border-t ${styles.mobileMenu.header} ${currentTheme === 'theme1' ? 'bg-gray-50' :
                        currentTheme === 'theme2' ? 'bg-gray-900' :
                            'bg-pink-50'
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