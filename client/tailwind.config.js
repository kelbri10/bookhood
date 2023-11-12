/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Asset'], 
        'body': ['Biz UDPMincho']
      },
      colors: { 
        "custom-dark-gray": "#191919",
        "custom-green": "#27322E",
        "custom-lgt-brown": "#FCF2E6",
        
      },
      
    },
  },
  plugins: [],
}

