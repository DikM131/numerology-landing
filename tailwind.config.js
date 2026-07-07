/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          300: '#e8c872',
          400: '#d4a853',
        },
        premium: {
          bg: '#020617',
          card: '#111827',
          accent: '#d4a853',
          'accent-light': '#e8c872',
          text: '#f8fafc',
          'text-secondary': '#a8b8cc',
          border: 'rgba(255,255,255,0.06)',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      /* ── Design System: Spacing ── */
      spacing: {
        'section': '12rem',
        'section-sm': '8rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      /* ── Design System: Border Radius ── */
      borderRadius: {
        'card': '1.5rem',
        'input': '1rem',
        'button': '9999px',
        'icon': '1rem',
      },

      /* ── Design System: Box Shadow ── */
      boxShadow: {
        'card': '0 0 40px rgba(212, 168, 83, 0.08), 0 0 80px rgba(212, 168, 83, 0.04)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(212, 168, 83, 0.06)',
        'button': '0 4px 20px rgba(212, 168, 83, 0.15)',
        'button-hover': '0 8px 30px rgba(212, 168, 83, 0.25)',
        'gold': '0 0 40px rgba(212, 168, 83, 0.08), 0 0 80px rgba(212, 168, 83, 0.04)',
      },

      /* ── Design System: Transitions ── */
      transitionDuration: {
        'DEFAULT': '300ms',
        'slow': '500ms',
        'hover-card': '400ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      /* ── Design System: Animations ── */
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'card-float': 'card-float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'card-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
