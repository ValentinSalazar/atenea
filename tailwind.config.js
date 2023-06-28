/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        semiFull: '90vw'
      },
      height: {
        semiFull: '90vh'
      },
      fontFamily: {
        akshar: 'akshar',
        poppins: 'poppins'
      },
      letterSpacing: {
        bigSpacing: '0.4em',
        bigSpacingL: '0.5em',
        bigSpacingXL: '0.8em',
      },
      colors: {
        primaryColor: '#212121',
        primaryColorLow: 'rgba(33,33,33, 0.7)',
        secondaryColor: '#ffffff'
      },
      boxShadow: {
        firstShadow: '0px 0px 8px rgba(0,0,0,0.3)',
      },
      screens: {
        'small': { 'raw': '(max-height: 740px) and (max-width: 500px)' }
      },
      fontSize: {
        xxs: '10px'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

