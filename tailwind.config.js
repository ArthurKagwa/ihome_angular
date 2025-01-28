/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A7D44', // Primary Green
          light: '#7BBF6A', // Light Green
          dark: '#265D30', // Dark Green
        },
        secondary: {
          DEFAULT: '#6E4B3E', // Primary Brown
          light: '#A98266', // Light Brown
          dark: '#4B3027', // Dark Brown
        },
        accent: {
          yellow: '#D9A74F', // Golden Yellow
          orange: '#E17F45', // Warm Orange
          blue: '#A4DDED', // Light Sky Blue
        },
        neutral: {
          cream: '#F5F1E6', // Cream
          charcoal: '#333533', // Deep Charcoal
          white: '#FAF9F6', // Off-White
        },
      },
    },
  },  
  plugins: [],
}

