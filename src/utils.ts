import { ThemeType } from "./types";

export const themeOptions = [
    { value: 'theme1' as const, label: 'Minimalist Light' },
    { value: 'theme2' as const, label: 'Professional Dark' },
    { value: 'theme3' as const, label: 'Playful Colorful' },
];

// Helper functions for special cases not covered by theme config
export const getSpecialClasses = (currentTheme: ThemeType, context: string) => {
    // Use this for any edge cases or dynamic styling that doesn't fit the theme config
    switch (context) {
        case 'mobile-menu-transform':
            return currentTheme === 'theme3' ? 'transform hover:scale-105' : '';
        case 'pacifico-font':
            return currentTheme === 'theme3' ? 'font-["Pacifico"]' : '';
        default:
            return '';
    }
};