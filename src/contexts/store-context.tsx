import React, { createContext } from "react";

import { API } from "../api";
import { ApiEndpointsEnum } from "../api/endpoints";

import { TCountry } from "../types/countryTypes";

const kStorageTheme = 'theme';

export type TTheme = 'light' | 'dark';
export type TStore = {
  theme: TTheme;
  toggleTheme: () => void;
  countries: TCountry[];
  getCountries: () => void;
}

export const storeContext = createContext<TStore | null>(null);

export const StoreProvider = ({ children }: any) => {
  const [theme, setTheme] = React.useState<TTheme>('light');
  const [countries, setCountries] = React.useState<any[]>([]);

  const updateTheme = (
    newTheme: TTheme
  ) => {
    setTheme(newTheme);
    localStorage.setItem(kStorageTheme, newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  React.useEffect(() => {
    let currentTheme = localStorage.getItem(kStorageTheme) as TTheme;

    if (!currentTheme) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
      }
    }

    updateTheme(currentTheme || 'light');
  }, []);

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

  const getCountries = React.useCallback(async () => {
    try {
      const countries = await API.get<TCountry[]>(ApiEndpointsEnum.GET_ALL);
      setCountries(countries);
    } catch (error) {

    }
  }, []);

  const stores = {
    theme,
    toggleTheme,
    countries,
    getCountries,
  }

  return <storeContext.Provider value={stores}>{children}</storeContext.Provider>
}