/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
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
        underline: { 
          '0': {
            transform: 'translateX(0)'
          },
          '50%': {
            transform: 'translateX(50%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      }, 
      animation: {
        underline: 'underline 1s ease-in-out'
      },
    },
  },
  plugins: [],
}

