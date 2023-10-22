/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'scissor-start': 'hsl(39, 89%, 49%)',
        'scissor-stop': 'hsl(40, 84%, 53%)',
        'paper-start': 'hsl(230, 89%, 62%)',
        'paper-stop': 'hsl(230, 89%, 65%)',
        'rock-start': 'hsl(349, 71%, 52%)',
        'rock-stop': 'hsl(349, 70%, 56%)',
        'lizard-start': 'hsl(261, 73%, 60%)',
        'lizard-stop': 'hsl(261, 72%, 63%)',
        'spock-start': 'hsl(189, 59%, 53%)',
        'spock-stop': 'hsl(189, 58%, 57%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'gradient-start': 'hsl(214, 47%, 23%)',
        'gradient-stop': 'hsl(237, 49%, 15%)'
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        triangle: 'url("/public/bg-triangle.svg")',
        pentagon: 'url("/public/bg-pentagon.svg")'
      },
      fontSize: {
        exl: '200px'
      },
      animation: {
        blink: 'blink 0.7s 1'
      },
      keyframes: {
        blink: {
          '30%, 50%, 80%, 100%': { opacity: 1 },
          '0%, 40%, 70%, 90%': { opacity: 0.5 }
        }
      }
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%'
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(scissor|paper|rock)-(start|stop)/
    }
  ]
};
