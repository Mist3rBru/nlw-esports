/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: 'url(background-galaxy.png)',
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 0%, #43E7AD 40%, #E1D55D 96%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    }
  },
  plugins: []
}

