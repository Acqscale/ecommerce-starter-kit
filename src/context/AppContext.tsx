import {
  createContext,
  useEffect,
  useContext,
  ReactChild,
  FunctionComponent,
  useState,
} from 'react';

const AppContext = createContext({});

type AppProviderProps = {
  children: ReactChild;
};

const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('default');

  const setSelectedTheme = (selectedTheme: string) => {
    localStorage.setItem('theme', selectedTheme);
    setTheme(selectedTheme);
  };

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    if (userTheme) {
      setTheme(userTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setSelectedTheme,
      }}
    >
      <div className={`${theme} bg-background`}> {children}</div>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
