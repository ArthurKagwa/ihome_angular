/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937', // Dark Slate (Professional & Readable)
          light: '#374151', // Medium Grayish Blue (Modern)
          dark: '#111827', // Deep Graphite (Elegant Contrast)
        },
        secondary: {
          DEFAULT: '#F3F4F6', // Light Cool Gray (Clean & Minimal)
          light: '#E5E7EB', // Soft Gray (Subtle Contrast)
          dark: '#9CA3AF', // Muted Gray (Neutral)
        },
        accent: {
          gold: '#C7A252', // Elegant Gold (Luxury)
          emerald: '#3B7D5B', // Rich Emerald (Fresh & Modern)
          crimson: '#A42C27', // Deep Crimson (Strong, High Contrast)
        },
        neutral: {
          white: '#FFFFFF', // Pure White (Maximum Readability)
          light: '#F9FAFB', // Very Light Gray (Soft & Clean)
          dark: '#1F2937', // Slate Gray (Strong Readability)
          black: '#0A0A0A', // Deep Black (Bold Contrast)
        },
      },
    },
  },  
  plugins: [],
}
