/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    fontFamily: {
      routhem: ['Routhem', 'sans-serif'],
    },
    extend: {
       borderWidth: {
        '2': '2px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }, 

      colors: {
        pink: '#FF81E3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
