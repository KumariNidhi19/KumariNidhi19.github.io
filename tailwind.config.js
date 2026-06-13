/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand blue — Figma: #4585ca
        primary: '#4585ca',
        // Stats number blue — Figma: #3473b8
        'primary-stats': '#3473b8',
        // Section headers, role label — Figma: #183759
        navy: '#183759',
        // Main text — Figma: #0f172a
        dark: '#0f172a',
        // Body text — Figma: #475569
        slate: '#475569',
        // Card borders — Figma: #99c0e3
        'blue-border': '#99c0e3',
        // Skill chip background — Figma: #dff0ff
        'blue-light': '#dff0ff',
        // Job title blue — Figma: #0038c6
        'card-blue': '#0038c6',
        // AI tools text — Figma: #db2777
        'pink-accent': '#db2777',
        // AI tools card bg — Figma: #fce8f3
        'pink-light': '#fce8f3',
        // Projects area background — Figma: #f7f8fc
        'section-bg': '#f7f8fc',
        // Light gray backgrounds — Figma: #eeeeee
        'gray-muted': '#eeeeee',
        // Case study button border — Figma: #3d3d3d
        'dark-border': '#3d3d3d',
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        sans: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
      },
      fontSize: {
        // Type scale from Figma
        'hero': ['72px', { lineHeight: '1.1', fontWeight: '500' }],
        'section': ['56px', { lineHeight: '1.1', fontWeight: '500' }],
        'project-title': ['36px', { lineHeight: '1.25' }],
        'stats-num': ['96px', { lineHeight: '1' }],
        'nav': ['20px', { lineHeight: '1' }],
        'body-lg': ['24px', { lineHeight: '1.6' }],
        'body': ['20px', { lineHeight: '1.6' }],
        'body-sm': ['16px', { lineHeight: '1.6' }],
        'chip': ['16px', { lineHeight: '1' }],
      },
      spacing: {
        // Section padding from Figma
        'section': '100px',
        'section-x': '80px',
      },
      borderRadius: {
        'chip': '24px',
        'card': '16px',
        'btn': '56px',
        'section-card': '24px',
      },
      boxShadow: {
        'card': '0px 2px 4px rgba(0,0,0,0.16)',
        'btn-hover': '0 4px 16px rgba(69,133,202,0.3)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'ripple': 'ripple 0.6s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.4' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
