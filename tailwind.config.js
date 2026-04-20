/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        bg: '#0B1020',
        surface: '#121A2F',
        panel: '#1B2645',
        primary: '#7C8CFF',
        secondary: '#A46DFF',
        warm: '#FFC38B',
        text: '#F3F6FF',
        muted: '#AAB4D4',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(7, 10, 24, 0.35)',
        glass: '0 20px 80px rgba(20, 28, 54, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(124, 140, 255, 0.22), transparent 28%), radial-gradient(circle at 80% 18%, rgba(164, 109, 255, 0.18), transparent 26%), radial-gradient(circle at 55% 75%, rgba(255, 195, 139, 0.12), transparent 24%), linear-gradient(180deg, #0B1020 0%, #0D1327 35%, #121A2F 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(14px, -10px, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
