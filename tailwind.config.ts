import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          50: '#E6EBF4',
          100: '#CCD7E9',
          200: '#99AFD3',
          300: '#6687BD',
          400: '#335FA7',
          500: '#0A192F',
          600: '#081426',
          700: '#060F1C',
          800: '#040A13',
          900: '#020509',
        },
        emerald: {
          DEFAULT: '#004D40',
          50: '#E6F5F2',
          100: '#CCEBE5',
          200: '#99D7CB',
          300: '#66C3B1',
          400: '#33AF97',
          500: '#004D40',
          600: '#003D33',
          700: '#002E26',
          800: '#001E1A',
          900: '#000F0D',
        },
        gold: {
          50: '#FFF9E5',
          100: '#FFF2CC',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCD33',
          500: '#FFC000',
          600: '#CC9A00',
          700: '#997300',
          800: '#664D00',
          900: '#332600',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair-display)'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-90': '90vh',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

export default config