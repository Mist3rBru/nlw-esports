/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: 'url(background-galaxy@3x.png)',
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 0%, #43E7AD 20%, #E1D55D 40%, #9572FC 60%, #43E7AD 80%, #E1D55D 100%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
      backgroundSize: {
        600: '600%'
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': 'right center' },
          '50%': { 'background-position': 'left center' },
          '100%': { 'background-position': 'right center' },
        }
      },
      animation: {
        'nlw-gradient': 'gradient 6s linear infinite'
      }
    },
    plugins: []
  }
}

