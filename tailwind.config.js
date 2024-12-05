/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {    
      colors: {
        yellowHighlight: '#FFD54F', // Custom yellow for highlight
        lightBlue: '#E3F2FD',       // Light blue for placeholder
        primaryBlue: '#1E88E5',     // Button and theme color
      },
    },
  },
  plugins: [],
}

