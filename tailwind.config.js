const colors = require('tailwindcss/colors');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        primary: withOpacity('--color-primary'),
        'on-primary': withOpacity('--color-on-primary'),
        secondary: withOpacity('--color-secondary'),
        'on-secondary': withOpacity('--color-on-secondary'),
        success: withOpacity('--color-success'),
        warning: withOpacity('--color-warning'),
        danger: withOpacity('--color-danger'),
        disable: withOpacity('--color-disable'),
        background: withOpacity('--color-background'),
        'on-background': withOpacity('--color-on-background'),
      },
      fontFamily: {},
      fontWeight: {},
      font: {
        heading: '',
        subheading: '',
        title: '',
      },
      iconSize: {},
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      zIndex: {},
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
