/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#4f8bff',
        secondary: '#a855f7',
        accent: '#06b6d4',
        dark: {
          900: '#060912',
          800: '#0d1321',
          700: '#111827',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'grad-shift': 'gradShift 4s ease infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'slide-in': 'slideIn 0.8s ease forwards',
        'badge-pulse': 'badgePulse 2s ease-in-out infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-25px) scale(1.04)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(79,139,255,0)' },
          '50%': { boxShadow: '0 0 30px rgba(79,139,255,0.35)' },
        },
        gradShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        badgePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        scrollHint: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundSize: {
        '200': '200% auto',
      },
    },
  },
  plugins: [],
}
