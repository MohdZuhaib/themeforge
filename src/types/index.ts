export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface ThemeStyles {
  // Layout & Container Styles
  container: string;
  layout: string;
  main: string;
  contentWrapper: string;

  // Header Styles
  header: {
    base: string;
    text: string;
    logo: string;
    nav: {
      base: string;
      active: string;
      inactive: string;
    };
    dropdown: string;
  };

  // Typography Styles
  typography: {
    h1: string;
    h2: string;
    h3: string;
    body: string;
    bodySecondary: string;
    caption: string;
    subtitle: string;
  };

  // Component Styles
  card: {
    base: string;
    title: string;
    description: string;
    price: string;
    rating: string;
    feature: string;
    content: string;
  };

  // Button Styles
  button: {
    primary: string;
    secondary: string;
    ghost: string;
  };

  // Form Styles
  form: {
    container: string;
    label: string;
    input: string;
    textarea: string;
    submit: string;
  };

  // Info Box Styles
  infoBox: {
    base: string;
    email: string;
    phone: string;
    location: string;
  };

  // Navigation Styles (for theme2 sidebar)
  sidebar: {
    container: string;
    title: string;
    navItem: string;
    navItemActive: string;
  };

  // Loading & Error States
  loading: {
    spinner: string;
    container: string;
    text: string;
  };

  error: {
    text: string;
    container: string;
  };

  // Mobile Menu Styles
  mobileMenu: {
    overlay: string;
    drawer: string;
    header: string;
    navItem: string;
    navItemActive: string;
    themeButton: string;
    themeOption: string;
    themeOptionActive: string;
  };

  // Utility Classes
  utils: {
    gradient: string;
    shadow: string;
    border: string;
    transition: string;
    hover: string;
  };
}

export interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export interface GetNavlinkType {
  currentTheme: ThemeType;
  isActive: boolean;
}

export interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;

}