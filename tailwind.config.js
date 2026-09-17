/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#021e15',
          darker: '#042e20',
          dark: '#063b2a',
          primary: '#094e38',
          medium: '#0d6348',
          light: '#13805e',
          accent: '#1ab082',
          cream: '#FAF6EE',
          creamCard: '#F5EFE4',
          gold: '#C99A40',
          goldLight: '#E8C888',
          sand: '#F3EDDF',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -10px rgba(6, 59, 42, 0.12)',
        'hero-stat': '0 12px 30px rgba(2, 30, 21, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
