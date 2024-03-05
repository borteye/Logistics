/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg,png}",
  ],
  theme: {
    extend: {
      fontSize: {
        'header':'2rem',
        'small-header':'1.125rem',
        'paragraph': '1rem',
        'icon-size': '3rem',
        'medium-icon-size':'1.875rem'
      },
      colors:{
        'primary': '#FF3E41',
        'secondary': '#51CFED',
        'light':'#F8F2F0',
        'dark' : '#060315',
        'overlay': '#0000006e'

      },
      fontWeight:{
        'header':'700',
        'emphasis': '500'
      },
      backgroundImage: {
        'map': "url(/src/assets/map.png)"
      
      },
      screens:{
        'average':'992px',
        'small': '576px'
      }
    },
  },
  plugins: [],
}

