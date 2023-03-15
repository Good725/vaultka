module.exports = {
  fontFamily: {
    sans: ['var(--fontFamily)', 'sans-serif'],
    pixel: ['var(--mainFontFamily)', 'var(--fontFamily)']
  },
  extend: {
    boxShadow: {
      btnBorder: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    screens: {
      sm: { max: '639px' }
    },
    colors: {
      primary: {
        DEFAULT: '#FFFFFF',
        100: '#E8FF89',
        500: 'rgba(228, 234, 241, 0.54)',
        900: '#8AA814'
      },
      gold: {
        DEFAULT: 'rgba(191, 166, 119, 1)',
        60: 'rgba(191, 166, 119, 0.6)'
      },
      gray: {
        DEFAULT: '#8F8F8F',
        100: '#CFCFD0',
        900: '#343434'
      },
      green: {
        500: '#12B76A'
      },
      red: {
        500: '#F04438'
      },
      yellow: {
        500: '#EAB946'
      }
    }
  }
}
