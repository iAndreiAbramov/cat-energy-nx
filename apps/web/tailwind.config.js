const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'btn-green': '#68B738',
        'btn-green-darker': '#5EAA2F',
        'btn-gray': '#F2F2F2',
        'btn-gray-darker': '#EBEBEB',
      },
      textShadow: {
        DEFAULT: '0 4px 4px rgba(0, 0, 0, 0.25)',
        none: 'none',
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      arial: ['Arial', 'sans-serif'],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
