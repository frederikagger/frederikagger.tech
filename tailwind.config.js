module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkred: '#DB2777',
      darkgrey: '#2c2c2c',
      lightgrey: '#5c5c5c',
      blue: '#2777DB',
      white: '#ffff'
    },
    fontFamily: {
      sans: [
        'Oxanium',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    extend: {
      width: {
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        '20/20': '100%'
      },
      fontFamily: {
        body: ['Roboto', 'ui-sans-serif', 'system-ui'],
        header: ['Oxanium']
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(-5deg) translateX(-2px) translateY(-1px)'
          },
          '50%': { transform: 'rotate(25deg)' },
          '100%': {
            transform: 'rotate(55deg) translateX(2px) translateY(1px)'
          }
        }
      },
      animation: {
        wave: 'wave 0.55s linear infinite alternate'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
