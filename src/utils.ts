import { GetNavlinkType, ThemeType } from "./types";

export const themeOptions = [
    { value: 'theme1' as const, label: 'Minimalist Light' },
    { value: 'theme2' as const, label: 'Professional Dark' },
    { value: 'theme3' as const, label: 'Playful Colorful' },
];


export const getHeaderClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-500';
        case 'theme2':
            return 'fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-lg border-b border-gray-700 transition-all duration-500';
        case 'theme3':
            return 'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-pink-400 transition-all duration-500';
        default:
            return 'fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-500';
    }
};

export const getLogoClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors';
        case 'theme2':
            return 'text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors';
        case 'theme3':
            return 'text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-all duration-300';
        default:
            return 'text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors';
    }
};

export const getNavLinkClasses = ({ isActive, currentTheme }: GetNavlinkType) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';

    switch (currentTheme) {
        case 'theme1':
            return `${baseClasses} ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`;
        case 'theme2':
            return `${baseClasses} ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`;
        case 'theme3':
            return `${baseClasses} ${isActive ? 'bg-pink-500 text-white shadow-lg' : 'text-gray-700 hover:text-pink-600 hover:bg-pink-100'}`;
        default:
            return `${baseClasses} ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`;
    }
};

export const getDropdownClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'bg-white border border-gray-200 rounded-lg shadow-lg';
        case 'theme2':
            return 'bg-gray-800 border border-gray-700 rounded-lg shadow-lg';
        case 'theme3':
            return 'bg-white/95 backdrop-blur-md border-2 border-pink-300 rounded-xl shadow-xl';
        default:
            return 'bg-white border border-gray-200 rounded-lg shadow-lg';
    }
};

export const getLayoutClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'min-h-screen bg-gray-50 text-gray-900 font-sans transition-all duration-500';
        case 'theme2':
            return 'min-h-screen bg-gray-900 text-gray-100 font-serif transition-all duration-500';
        case 'theme3':
            return 'min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-gray-800 transition-all duration-500';
        default:
            return 'min-h-screen bg-gray-50 text-gray-900 font-sans transition-all duration-500';
    }
};

export const getMainClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'pt-16 px-4 md:px-8 lg:px-12';
        case 'theme2':
            return 'pt-16 flex';
        case 'theme3':
            return 'pt-16 px-4 md:px-8 lg:px-12';
        default:
            return 'pt-16 px-4 md:px-8 lg:px-12';
    }
};



export const getCardClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1';
        case 'theme2':
            return 'bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500';
        case 'theme3':
            return 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-400 hover:bg-white';
        default:
            return 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300';
    }
};

export const getTitleClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'text-lg font-semibold text-gray-900 mb-2 line-clamp-2';
        case 'theme2':
            return 'text-lg font-bold text-gray-100 mb-2 line-clamp-2';
        case 'theme3':
            return 'text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 line-clamp-2 font-["Pacifico"]';
        default:
            return 'text-lg font-semibold text-gray-900 mb-2 line-clamp-2';
    }
};

export const getDescriptionClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'text-sm text-gray-600 mb-4 line-clamp-3';
        case 'theme2':
            return 'text-sm text-gray-300 mb-4 line-clamp-3';
        case 'theme3':
            return 'text-sm text-gray-700 mb-4 line-clamp-3';
        default:
            return 'text-sm text-gray-600 mb-4 line-clamp-3';
    }
};

export const getPriceClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'text-2xl font-bold text-blue-600';
        case 'theme2':
            return 'text-2xl font-bold text-blue-400';
        case 'theme3':
            return 'text-2xl font-black text-pink-600 font-["Pacifico"]';
        default:
            return 'text-2xl font-bold text-blue-600';
    }
};

export const getButtonClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2';
        case 'theme2':
            return 'w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2';
        case 'theme3':
            return 'w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 font-semibold';
        default:
            return 'w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2';
    }
};


export const getContainerClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'max-w-4xl mx-auto py-8';
        case 'theme2':
            return 'max-w-4xl mx-auto py-8';
        case 'theme3':
            return 'max-w-5xl mx-auto py-12';
        default:
            return 'max-w-4xl mx-auto py-8';
    }
};

export const getTitleClasses = (currentTheme: ThemeType) => {
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

export const getCardClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8 hover:shadow-md transition-shadow';
        case 'theme2':
            return 'bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-8 mb-8 hover:shadow-xl transition-shadow';
        case 'theme3':
            return 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 p-10 mb-10 hover:shadow-2xl hover:bg-white transition-all hover:scale-105';
        default:
            return 'bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8 hover:shadow-md transition-shadow';
    }
};

export const getTextClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'text-gray-600 leading-relaxed';
        case 'theme2':
            return 'text-gray-300 leading-relaxed';
        case 'theme3':
            return 'text-gray-700 leading-relaxed';
        default:
            return 'text-gray-600 leading-relaxed';
    }
};

export const getSubtitleClasses = (currentTheme: ThemeType) => {
    switch (currentTheme) {
        case 'theme1':
            return 'text-2xl font-semibold text-gray-900 mb-4';
        case 'theme2':
            return 'text-2xl font-bold text-gray-100 mb-4';
        case 'theme3':
            return 'text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 font-["Pacifico"]';
        default:
            return 'text-2xl font-semibold text-gray-900 mb-4';
    }
};