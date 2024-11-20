import { useState } from 'react';

import { SessionStorageInput, SessionStorageOutput } from 'interfaces';

export const useSessionStorage = ({ key, defaultValue }: SessionStorageInput): SessionStorageOutput => {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const value = sessionStorage.getItem(key);

      if (value !== null) return JSON.parse(value);

      sessionStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = (newValue: string): void => {
    try {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      // console.log(error);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
