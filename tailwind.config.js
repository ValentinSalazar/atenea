/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        akshar: 'akshar',
        poppins: 'poppins'
      },
      letterSpacing: {
        bigSpacing: '6.5px',
        bigSpacingL: '10px',
        bigSpacingXL: '20px',
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

