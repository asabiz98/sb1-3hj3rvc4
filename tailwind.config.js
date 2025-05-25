/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ice-blue': '#A9D8E6',
        'navy': {
          800: '#0B1D3A',
          900: '#071429'
        },
        'charcoal': '#2E2E2E',
        'snow': '#F9FAFB',
        'orange': {
          500: '#FF6A3D',
          600: '#E55A2D'
        },
        'success': {
          100: '#DCFCE7',
          500: '#22C55E',
          700: '#15803D'
        },
        'warning': {
          100: '#FEF3C7',
          500: '#F59E0B',
          700: '#B45309'
        },
        'error': {
          100: '#FEE2E2',
          500: '#EF4444',
          700: '#B91C1C'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(11, 29, 58, 0.7), rgba(11, 29, 58, 0.5)), url('https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'about-pattern': "linear-gradient(rgba(11, 29, 58, 0.8), rgba(11, 29, 58, 0.6)), url('https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      boxShadow: {
        'custom': '0 4px 20px -2px rgba(11, 29, 58, 0.12)',
      }
    },
  },
  plugins: [],
};