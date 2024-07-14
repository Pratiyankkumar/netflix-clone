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
        hoverColor2: '#444C4C',
        backgroundColor: '#E50914',
        lightBlack: '#2D2D2D'
      },
      height: {
        '100': '500px',
        '101': '700px',
        '98' : '500px',
        '102': '630px',
        '103': '600px'
      },
      width: {
        '100': '440px',
        '101': '460px',
        '102': '500px',
        '103': '600px',
        '104': '500px',
        '105': '630px',
        '106': '350px',
        '110': '1000px',
        '111': '322px'
      },
      padding: {
        '100': '500px',
        '18': '68px',
        '21': '82px'
      }
    },
  },
  plugins: [],
};
