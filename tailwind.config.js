/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { lg: '1120px', xl: '1240px' },
    },
    extend: {
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-ink': 'rgb(var(--color-accent-ink) / <alpha-value>)',
        'accent-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
        whatsapp: 'rgb(var(--color-whatsapp) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Work Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        prose2: '62ch',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(27,31,35,.04), 0 8px 24px -12px rgba(27,31,35,.12)',
        lift: '0 20px 44px -16px rgba(23,61,51,.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
