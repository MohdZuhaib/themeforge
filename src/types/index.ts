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

export interface Theme {
  // container: string;
  // layout: string;

  // // Header Styles
  // header: {
  //   base: string;
  //   text: string;
  //   logo: string;
  //   nav: {
  //     base: string;
  //     active: string;
  //     inactive: string;
  //   };
  //   dropdown: string;
  // };

  // // Typography Styles
  // typography: {
  //   h1: string;
  //   h2: string;
  //   h3: string;
  //   body: string;
  //   bodySecondary: string;
  //   caption: string;
  // };

  // // Component Styles
  // card: {
  //   base: string;
  //   title: string;
  //   description: string;
  //   price: string;
  //   rating: string;
  // };

  // Button Styles
  button: string;

  // Form Styles
  // form: {
  //   container: string;
  //   label: string;
  //   input: string;
  //   textarea: string;
  //   submit: string;
  // };

  // // Info Box Styles
  // infoBox: {
  //   base: string;
  //   email: string;
  //   phone: string;
  // };

  // // Navigation Styles (for theme2 sidebar)
  // sidebar: {
  //   container: string;
  //   title: string;
  //   navItem: string;
  // };

  // // Loading & Error States
  // loading: {
  //   spinner: string;
  //   container: string;
  // };

  // error: {
  //   text: string;
  //   container: string;
  // };

  // // Utility Classes
  // utils: {
  //   gradient: string;
  //   shadow: string;
  //   border: string;
  //   transition: string;
  //   hover: string;
  // };

}

export interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}


export interface GetNavlinkType {
  currentTheme: ThemeType;
  isActive: boolean
}
export interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileThemeOpen: (open: boolean) => void;
  toggleMobileTheme: () => void;
  isMobileThemeOpen: boolean;
  closeMobileMenu: () => void;
}