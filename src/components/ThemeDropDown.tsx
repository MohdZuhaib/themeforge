import { useTheme } from '../contexts/ThemeContext';
import { ChevronDown } from 'lucide-react';
import { getDropdownClasses, themeOptions } from '../utils';

const ThemeDropDown = () => {

    const { currentTheme, setTheme } = useTheme();

    return (
        <div className="relative group">
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
    )
}

export default ThemeDropDown