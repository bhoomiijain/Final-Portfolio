/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          soft: '#f8c8dc',
          light: '#fde8f0',
          medium: '#f4a8c7',
        },
        yellow: {
          soft: '#fff3b0',
          light: '#fffacc',
          medium: '#ffe066',
        },
        blue: {
          soft: '#cde7ff',
          light: '#e8f4ff',
          medium: '#90cbff',
        },
        brand: {
          pink: '#f8c8dc',
          yellow: '#fff3b0',
          blue: '#cde7ff',
          dark: '#2d2d2d',
          gray: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.10)',
        'pink': '0 4px 20px rgba(248, 200, 220, 0.5)',
        'blue': '0 4px 20px rgba(205, 231, 255, 0.5)',
      },
      maxWidth: {
        'container': '1140px',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
