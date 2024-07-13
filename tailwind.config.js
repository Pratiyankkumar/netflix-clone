// tailwind.config.js
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: '#B20710',
        backgroundColor: '#E50914',
      },
      height: {
        '100': '600px',
        '98' : '450px'
      }
    },
  },
  plugins: [],
};
