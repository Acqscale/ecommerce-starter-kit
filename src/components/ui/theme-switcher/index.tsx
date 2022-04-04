import { FunctionComponent } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/solid';

type ThemeSwitcherProps = {
  isDark: boolean;
  switchTheme: (val: string) => void;
};

const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = ({
  isDark,
  switchTheme,
}) => {
  const handleThemeChange = () => {
    switchTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className="inline-block p-1 w-8 h-8 leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out text-on-primary bg-primary"
      onClick={handleThemeChange}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitcher;
