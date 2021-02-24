import React, { createContext } from "react";

const kStorageTheme = 'theme';

export type TTheme = 'light' | 'dark';
export type TStore = {
  theme: TTheme;
  toggleTheme: () => void;
}

export const storeContext = createContext<TStore | null>(null);

export const StoreProvider = ({ children }: any) => {
  const [theme, setTheme] = React.useState<TTheme>('light');

  const updateTheme = React.useCallback((
    newTheme: TTheme
  ) => {
    setTheme(newTheme);
    localStorage.setItem(kStorageTheme, newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  React.useEffect(() => {
    let currentTheme = localStorage.getItem(kStorageTheme) as TTheme;

    if (!currentTheme) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
      }
    }

    updateTheme(currentTheme || 'light');
    prepareEvent();
  }, []);

  const prepareEvent = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const currentTheme = e.matches ? "dark" : "light";
      updateTheme(currentTheme || 'light');
    });
  }

  const toggleTheme = React.useCallback(() => {
    let currentTheme = localStorage.getItem(kStorageTheme) as TTheme;

    if (!currentTheme) {
      currentTheme = 'dark';
    } else {
      if (currentTheme === 'light') {
        currentTheme = 'dark';
      } else {
        currentTheme = 'light';
      }
    }

    updateTheme(currentTheme || 'light');
  }, []);

  const stores = {
    theme,
    toggleTheme,
  }

  return <storeContext.Provider value={stores}>{children}</storeContext.Provider>
}