/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Libre Baskerville'], 
        'body': ['Source Sans Pro']
      },
      colors: { 
        'custom-dark-gray': '#222222',
        'custom-mustard-yellow': '#ffe66b', 
        "custom-dark-green": "#27322E", 
        "custom-md-green": "#C8D6D1",
        "custom-dark-brown": "#241406", 
        "custom-md-brown": "#D9BEA7",
        "custom-lgt-brown": "#F5D9C1",
        "custom dark-gray": "#222222"
      },
      keyframes: {
       slideOut: { 
          '0': {
            transform: 'translateX(0)'
          }, 
          '100%': { 
            transform: 'translateX(100%)'
          }
        }
      }, 
      animation: {
        slideOut: 'slideOut 1s ease-in 1 reverse', 
      },
    },
  },
  plugins: [],
}

