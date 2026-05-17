export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cascade: {
          dark: '#2f3437',
          forest: '#4f6f52',
          cocoa: '#6b4f3a',
          cream: '#f4eee6',
        },
      },
      boxShadow: {
        soft: '0 20px 50px rgba(47, 52, 55, 0.12)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'warm-light': 'radial-gradient(circle at top, rgba(244,238,230,0.45), transparent 45%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scale(0.85)', opacity: 0.2 },
          '100%': { transform: 'translateY(-120px) scale(1.1)', opacity: 0 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        steam: 'steam 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
