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
          50:  '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          DEFAULT: '#2563eb',
        },
        reelax: {
          bg:          '#F1F5F9',
          card:        '#FFFFFF',
          border:      '#E5E7EB',
          text:        '#111827',
          muted:       '#6B7280',
          placeholder: '#9CA3AF',
          orange:      '#F59E0B',
          green:       '#10B981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm:  '4px',
        md:  '8px',
        lg:  '12px',
        xl:  '16px',
      },
    },
  },
  plugins: [],
}
