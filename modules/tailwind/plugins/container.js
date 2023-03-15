const plugin = require('tailwindcss/plugin')

const SIZES = {
  fallback: '100%',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xl2: '1536px'
}

const container = plugin(({ addUtilities }) => {
  const utility = {
    '.container': {
      width: SIZES.fallback,
      margin: 'auto',
      paddingRight: '24px',
      paddingLeft: '24px',

      '@screen md': {
        paddingRight: '80px',
        paddingLeft: '80px'
      },

      '@screen xl': {
        paddingRight: '120px',
        paddingLeft: '120px'
      }
    },
    '.smallText': {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '22px',
      color: '#FFFFFF'
    },
    '.backgroundGradient': {
      background:
        'linear-gradient(90deg, rgba(0, 69, 147, 0.5) 20.2%, rgba(0, 73, 152, 0.5) 20.21%, rgba(0, 210, 242, 0.3) 52.95%, rgba(0, 80, 160, 0.5) 100%)'
    },
    '.normalBorder': {
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    '.goldBorder': {
      border: '1px solid #BFA677'
    },
    '.roundBorder': {
      border: '1px solid #BDA180'
    }
  }

  addUtilities(utility)
})

module.exports = container
