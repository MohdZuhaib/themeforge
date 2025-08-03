import { ThemeType, ThemeStyles } from '../types';

export const themeStyles: Record<ThemeType, ThemeStyles> = {
    theme1: {
        // Layout & Container
        container: 'min-h-screen bg-gray-50 text-gray-900 font-sans transition-all duration-500',
        layout: 'max-w-7xl mx-auto py-8',
        main: 'pt-16 px-4 md:px-8 lg:px-12',
        contentWrapper: 'flex flex-col gap-8',
        // Header
        header: {
            base: 'fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-500',
            text: 'text-gray-800',
            logo: 'text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors',
            nav: {
                base: 'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                active: 'bg-blue-100 text-blue-700',
                inactive: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            },
            dropdown: 'bg-white border border-gray-200 rounded-lg shadow-lg'
        },

        // Typography
        typography: {
            h1: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center',
            h2: 'text-2xl font-semibold text-gray-900 mb-4',
            h3: 'text-lg font-semibold text-gray-900',
            body: 'text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto',
            bodySecondary: 'text-gray-600 leading-relaxed',
            caption: 'text-sm text-gray-600',
            subtitle: 'text-2xl font-semibold text-gray-900 mb-4'
        },

        // Card Component
        card: {
            base: 'flex items-center flex-col md:flex-row bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1',
            title: 'text-lg font-semibold text-gray-900 mb-2 line-clamp-2',
            description: 'text-sm text-gray-600 mb-4 line-clamp-3',
            price: 'text-2xl font-bold text-blue-600',
            rating: 'flex items-center space-x-1 text-yellow-500',
            feature: 'bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow',
            content: 'bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8 hover:shadow-md transition-shadow',
            button: 'w-full md:w-fit'
        },

        // Buttons
        button: {
            primary: ' bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2',
            secondary: 'bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition-all duration-300',
            ghost: 'text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-all duration-300'
        },

        // Form Elements
        form: {
            container: 'bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow',
            label: 'block text-sm font-medium text-gray-700 mb-2',
            input: 'w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all',
            textarea: 'w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all',
            submit: 'w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium'
        },

        // Info Boxes
        infoBox: {
            base: 'bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow',
            email: 'p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500',
            phone: 'p-4 rounded-lg bg-green-50 border-l-4 border-green-500',
            location: 'p-4 rounded-lg bg-purple-50 border-l-4 border-purple-500'
        },

        // Sidebar (not used in theme1)
        sidebar: {
            container: '',
            title: '',
            navItem: '',
            navItemActive: ''
        },

        // Loading & Error
        loading: {
            spinner: 'w-8 h-8 animate-spin text-blue-600',
            container: 'flex items-center justify-center py-12 text-gray-600',
            text: 'text-lg text-gray-600'
        },

        error: {
            text: 'text-red-500 text-xl',
            container: 'flex items-center justify-center py-12 text-red-600'
        },

        // Mobile Menu
        mobileMenu: {
            overlay: 'fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity duration-300',
            drawer: 'bg-white border-l border-gray-200 shadow-2xl',
            header: 'border-gray-200',
            navItem: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
            navItemActive: 'bg-blue-100 text-blue-700 shadow-sm',
            themeButton: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            themeOption: 'hover:bg-gray-100 text-gray-700',
            themeOptionActive: 'bg-blue-100 text-blue-700 shadow-sm'
        },

        // Utilities
        utils: {
            gradient: '',
            shadow: 'shadow-sm hover:shadow-md',
            border: 'border-gray-200',
            transition: 'transition-all duration-300',
            hover: 'hover:scale-105'
        }
    },

    theme2: {
        // Layout & Container
        container: 'min-h-screen bg-gray-900 text-gray-100 font-serif transition-all duration-500',
        layout: 'max-w-6xl mx-auto py-8',
        main: 'pt-16 flex',
        contentWrapper: 'flex flex-col gap-8',

        // Header
        header: {
            base: 'fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-lg border-b border-gray-700 transition-all duration-500',
            text: 'text-white',
            logo: 'text-xl font-bold text-gray-100 hover:text-blue-400 transition-colors',
            nav: {
                base: 'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                active: 'bg-blue-600 text-white',
                inactive: 'text-gray-300 hover:text-white hover:bg-gray-700'
            },
            dropdown: 'bg-gray-800 border border-gray-700 rounded-lg shadow-lg'
        },

        // Typography
        typography: {
            h1: 'text-3xl md:text-4xl font-bold text-gray-100 mb-6 text-center',
            h2: 'text-xl font-bold text-gray-100 mb-4',
            h3: 'text-md font-bold text-gray-100',
            body: 'text-sm text-gray-300 mb-8 text-center max-w-3xl mx-auto',
            bodySecondary: 'text-gray-300 leading-relaxed text-xs',
            caption: 'text-xs text-gray-300',
            subtitle: 'text-xs font-bold text-gray-100 mb-4'
        },

        // Card Component
        card: {
            base: 'flex items-center flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500',
            title: 'text-lg font-bold text-gray-100 mb-2 line-clamp-2',
            description: 'text-xs text-gray-300 mb-4 line-clamp-3',
            price: 'text-xl font-bold text-blue-400',
            rating: 'flex items-center space-x-1 text-yellow-400',
            feature: 'bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6 text-center hover:shadow-xl transition-shadow',
            content: 'bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-8 mb-8 hover:shadow-xl transition-shadow',
            button: 'w-full md:w-fit'
        },

        // Buttons
        button: {
            primary: 'bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-1',
            secondary: 'bg-gray-800 text-blue-400 border border-blue-400 px-6 py-2 rounded-md font-bold hover:bg-gray-700 transition-all duration-300',
            ghost: 'text-blue-400 px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300'
        },

        // Form Elements
        form: {
            container: 'bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-8 hover:shadow-xl transition-shadow',
            label: 'block text-sm font-medium text-gray-300 mb-2',
            input: 'w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all',
            textarea: 'w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all',
            submit: 'w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2 font-medium'
        },

        // Info Boxes
        infoBox: {
            base: 'bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-8 hover:shadow-xl transition-shadow',
            email: 'p-4 rounded-lg bg-gray-800 border-l-4 border-blue-500',
            phone: 'p-4 rounded-lg bg-gray-800 border-l-4 border-green-500',
            location: 'p-4 rounded-lg bg-gray-800 border-l-4 border-purple-500'
        },

        // Sidebar
        sidebar: {
            container: 'fixed left-0 top-16 h-full w-64 bg-gray-800 border-r border-gray-700 transition-all duration-500 hidden lg:block',
            title: 'text-xl font-bold text-gray-100',
            navItem: 'text-gray-300 hover:bg-gray-700 hover:text-white hover:transform hover:scale-105',
            navItemActive: 'bg-blue-600 text-white shadow-lg transform scale-105'
        },

        // Loading & Error
        loading: {
            spinner: 'w-8 h-8 animate-spin text-blue-400',
            container: 'flex items-center justify-center py-12 text-gray-300',
            text: 'text-lg text-gray-300'
        },

        error: {
            text: 'text-red-400 text-xl',
            container: 'flex items-center justify-center py-12 text-red-400'
        },

        // Mobile Menu
        mobileMenu: {
            overlay: 'fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity duration-300',
            drawer: 'bg-gray-800 border-l border-gray-700 shadow-2xl',
            header: 'border-gray-700',
            navItem: 'text-gray-300 hover:text-white hover:bg-gray-700',
            navItemActive: 'bg-blue-600 text-white shadow-lg',
            themeButton: 'bg-gray-700 text-gray-200 hover:bg-gray-600',
            themeOption: 'hover:bg-gray-700 text-gray-300',
            themeOptionActive: 'bg-blue-600 text-white shadow-md'
        },

        // Utilities
        utils: {
            gradient: '',
            shadow: 'shadow-lg hover:shadow-xl',
            border: 'border-gray-700',
            transition: 'transition-all duration-300',
            hover: 'hover:scale-105'
        }
    },

    theme3: {
        // Layout & Container
        container: 'min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-gray-800 transition-all duration-500',
        layout: 'max-w-7xl mx-auto py-12',
        main: 'pt-16 px-4 md:px-8 lg:px-12',
        contentWrapper: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',

        // Header
        header: {
            base: 'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-pink-400 transition-all duration-500',
            text: 'text-white',
            logo: 'text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-all duration-300',
            nav: {
                base: 'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                active: 'bg-pink-500 text-white shadow-lg',
                inactive: 'text-gray-700 hover:text-pink-600 hover:bg-pink-100'
            },
            dropdown: 'bg-white/95 backdrop-blur-md border-2 border-pink-300 rounded-xl shadow-xl'
        },

        // Typography
        typography: {
            h1: 'text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-8 text-center font-["Pacifico"] leading-tight',
            h2: 'text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 font-["Pacifico"]',
            h3: 'text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-["Pacifico"]',
            body: 'text-2xl text-gray-800 mb-12 text-center max-w-3xl mx-auto font-bold',
            bodySecondary: 'text-gray-700 leading-relaxed text-lg font-medium',
            caption: 'text-sm text-gray-700',
            subtitle: 'text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 font-["Pacifico"]'
        },

        // Card Component
        card: {
            base: 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-400 hover:bg-white',
            title: 'text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 line-clamp-2 font-["Pacifico"]',
            description: 'text-sm text-gray-700 mb-4 line-clamp-3',
            price: 'text-2xl font-black text-pink-600 font-["Pacifico"]',
            rating: 'flex items-center space-x-1 text-orange-500',
            feature: 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 p-8 text-center hover:shadow-2xl hover:bg-white transition-all hover:scale-105',
            content: 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 p-10 mb-10 hover:shadow-2xl hover:bg-white transition-all hover:scale-105',
            button: 'w-full md:w-fit'
        },

        // Buttons
        button: {
            primary: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 font-semibold',
            secondary: 'bg-white text-purple-600 border-2 border-purple-500 px-6 py-2 rounded-lg font-bold hover:bg-purple-50 transition-all duration-300',
            ghost: 'text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100 transition-all duration-300'
        },

        // Form Elements
        form: {
            container: 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 p-10 hover:shadow-2xl hover:bg-white transition-all hover:scale-105',
            label: 'block text-sm font-bold text-gray-800 mb-2',
            input: 'w-full px-4 py-3 bg-white/80 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-400 transition-all hover:bg-white',
            textarea: 'w-full px-4 py-3 bg-white/80 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-400 transition-all hover:bg-white',
            submit: 'w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 font-semibold'
        },

        // Info Boxes
        infoBox: {
            base: 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 p-10 hover:shadow-2xl hover:bg-white transition-all hover:scale-105',
            email: 'p-4 rounded-lg bg-white bg-opacity-70 border-l-4 border-purple-500',
            phone: 'p-4 rounded-lg bg-white bg-opacity-70 border-l-4 border-green-500',
            location: 'p-4 rounded-lg bg-white bg-opacity-70 border-l-4 border-pink-500'
        },

        // Sidebar (not used in theme3)
        sidebar: {
            container: '',
            title: '',
            navItem: '',
            navItemActive: ''
        },

        // Loading & Error
        loading: {
            spinner: 'w-8 h-8 animate-spin text-pink-600',
            container: 'flex items-center justify-center py-12 text-pink-600',
            text: 'text-lg text-pink-600'
        },

        error: {
            text: 'text-red-600 text-xl',
            container: 'flex items-center justify-center py-12 text-red-600'
        },

        // Mobile Menu
        mobileMenu: {
            overlay: 'fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-opacity duration-300',
            drawer: 'bg-white backdrop-blur-md border-l-4 border-pink-400 shadow-2xl',
            header: 'border-pink-200',
            navItem: 'text-gray-700 hover:text-pink-600 hover:bg-pink-100',
            navItemActive: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg',
            themeButton: 'bg-pink-100 text-gray-800 hover:bg-pink-200',
            themeOption: 'hover:bg-pink-50 text-gray-700',
            themeOptionActive: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
        },

        // Utilities
        utils: {
            gradient: 'bg-gradient-to-br from-yellow-100 to-pink-100',
            shadow: 'shadow-xl hover:shadow-2xl',
            border: 'border-pink-200',
            transition: 'transition-all duration-300',
            hover: 'hover:scale-105 transform'
        }
    }
};

export const themeOptions = [
    { value: 'theme1' as const, label: 'Minimalist Light' },
    { value: 'theme2' as const, label: 'Professional Dark' },
    { value: 'theme3' as const, label: 'Playful Colorful' },
];
