/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
        'heading': ['Vast Shadow', 'cursive'],
        'description': ['Libre Franklin', 'sans-serif'],
      },
      boxShadow: {
        'Custom': '4px 4px #2f2f2f',
      },
      colors: {
        'dark': "#17191b",
      },
      backgroundColor: {
        'body': 'white',
        'dark': "#17191b",
        'secondary': "#EEEEEE",
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, #e0e0e0 1px, transparent 1px),
                         linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid-size': '20px 20px', // Adjusted grid spacing for better visibility
      },
    },
  },
  plugins: [],
};