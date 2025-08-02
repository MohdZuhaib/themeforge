import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { themeStyles } from '../config/themeConfig';

export const useThemeStyles = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeStyles must be used within a ThemeProvider');
    }

    const { currentTheme } = context;
    return themeStyles[currentTheme];
};