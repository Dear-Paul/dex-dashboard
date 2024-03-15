// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xxs: '0.65rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A5743',
          light: '#3941F1',
          lighter: '#CFCCD6'
        },
        secondary: {
          DEFAULT: '#FAFAFA'
        },
        tertiary: {
          DEFAULT: '#5B5B5B'
        },
        dark: {
          DEFAULT: '#101828'
        },
        success: {
          DEFAULT: '#12B76A'
        },
        active: '#FFBA49',
        inactive: '#6A6B6D',
        disabled: '#EFEFEF',
        rating: '#276E59'
      }
    }
  },
  plugins: []
};
