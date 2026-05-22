/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      /* =========================================
         COLORS
      ========================================= */

      colors: {
        /* =========================
           BACKGROUND
        ========================== */

        background: {
          DEFAULT: '#F7F8FC',
          secondary: '#F4F5FB',
          tertiary: '#EEF1F8',
          dark: '#0D1020',
        },

        /* =========================
           PRIMARY BRAND
        ========================== */

        primary: {
          DEFAULT: '#7C4DFF',

          50: '#F4F1FF',
          100: '#EBE5FF',
          200: '#D8CCFF',
          300: '#BCA5FF',
          400: '#9B75FF',
          500: '#7C4DFF',
          600: '#6D39F5',
          700: '#5E2EE6',
          800: '#4F25C2',
          900: '#421F9E',
          950: '#29135F',
        },

        /* =========================
           ACCENT
        ========================== */

        accent: {
          purple: '#8B5CF6',
          indigo: '#5B3DF5',
          violet: '#7C3AED',
          blue: '#4F8CFF',
          pink: '#FF74C9',
          orange: '#FF9F43',
          green: '#2ECC71',
        },

        /* =========================
           TEXT
        ========================== */

        text: {
          DEFAULT: '#171C33',

          primary: '#171C33',
          secondary: '#667085',
          muted: '#98A2B3',
          light: '#C7CEDB',
          inverse: '#FFFFFF',
          dark: '#0D1020',
        },

        /* =========================
           SURFACE / CARD
        ========================== */

        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FD',
          tertiary: '#EEF1F7',
          dark: '#171C33',
        },

        card: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FD',
          dark: '#12172B',
          purple: '#7C4DFF',
        },

        /* =========================
           BORDER
        ========================== */

        border: {
          DEFAULT: '#E9EBF3',
          secondary: '#DCE1EE',
          strong: '#C7CEDB',
          dark: '#2C334D',
        },

        /* =========================
           SUCCESS
        ========================== */

        success: {
          DEFAULT: '#12B76A',

          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A',
          600: '#039855',
          700: '#027A48',
          800: '#05603A',
          900: '#054F31',
        },

        /* =========================
           WARNING
        ========================== */

        warning: {
          DEFAULT: '#F79009',

          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
        },

        /* =========================
           ERROR
        ========================== */

        error: {
          DEFAULT: '#F04438',

          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },

        /* =========================
           INFO
        ========================== */

        info: {
          DEFAULT: '#2E90FA',

          50: '#EFF8FF',
          100: '#D1E9FF',
          200: '#B2DDFF',
          300: '#84CAFF',
          400: '#53B1FD',
          500: '#2E90FA',
          600: '#1570EF',
          700: '#175CD3',
          800: '#1849A9',
          900: '#194185',
        },

        /* =========================
           DARK SCALE
        ========================== */

        dark: {
          DEFAULT: '#171C33',

          50: '#F6F7FB',
          100: '#ECEEF5',
          200: '#D6DAEA',
          300: '#B3BDD6',
          400: '#8896BA',
          500: '#67759E',
          600: '#4F5B82',
          700: '#3F4868',
          800: '#2C334D',
          900: '#171C33',
          950: '#0D1020',
        },
      },

      /* =========================================
         FONT FAMILY
      ========================================= */

      fontFamily: {
        sans: ['Inter'],
        heading: ['Inter'],
        mono: ['JetBrains Mono'],
      },

      /* =========================================
         FONT SIZE
      ========================================= */

      fontSize: {
        '2xs': ['10px', { lineHeight: '14px' }],

        xs: ['12px', { lineHeight: '16px' }],

        sm: ['14px', { lineHeight: '20px' }],

        base: ['16px', { lineHeight: '24px' }],

        lg: ['18px', { lineHeight: '28px' }],

        xl: ['20px', { lineHeight: '30px' }],

        '2xl': ['24px', { lineHeight: '32px' }],

        '3xl': ['30px', { lineHeight: '38px' }],

        '4xl': ['36px', { lineHeight: '44px' }],
      },

      /* =========================================
         FONT WEIGHT
      ========================================= */

      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },

      /* =========================================
         BORDER RADIUS
      ========================================= */

      borderRadius: {
        xs: '6px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        full: '9999px',
      },

      /* =========================================
         SPACING
      ========================================= */

      spacing: {
        0.5: '2px',
        1.5: '6px',
        2.5: '10px',
        3.5: '14px',
        4.5: '18px',
        5.5: '22px',
        6.5: '26px',
        7.5: '30px',
        8.5: '34px',
        9.5: '38px',
      },

      /* =========================================
         SHADOWS
      ========================================= */

      boxShadow: {
        xs: '0 1px 2px rgba(16,24,40,0.04)',

        sm: '0 2px 4px rgba(16,24,40,0.06)',

        md: '0 6px 12px rgba(16,24,40,0.08)',

        lg: '0 12px 24px rgba(16,24,40,0.12)',

        xl: '0 20px 40px rgba(16,24,40,0.16)',

        card: '0 4px 20px rgba(124,77,255,0.08)',

        purple: '0 10px 30px rgba(124,77,255,0.25)',

        glow: '0 0 24px rgba(124,77,255,0.35)',

        soft: '0 2px 16px rgba(15,23,42,0.06)',
      },

      /* =========================================
         OPACITY
      ========================================= */

      opacity: {
        15: '0.15',
        35: '0.35',
        85: '0.85',
      },

      /* =========================================
         Z INDEX
      ========================================= */

      zIndex: {
        1: '1',
        5: '5',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
      },

      /* =========================================
         ANIMATION
      ========================================= */

      animation: {
        fade: 'fade 0.3s ease-in-out',
        slideUp: 'slideUp 0.35s ease-out',
        pulseSoft: 'pulseSoft 2s infinite',
      },

      /* =========================================
         KEYFRAMES
      ========================================= */

      keyframes: {
        fade: {
          from: {
            opacity: 0,
          },

          to: {
            opacity: 1,
          },
        },

        slideUp: {
          from: {
            opacity: 0,
            transform: 'translateY(12px)',
          },

          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },

        pulseSoft: {
          '0%, 100%': {
            opacity: 1,
          },

          '50%': {
            opacity: 0.7,
          },
        },
      },
    },
  },
  plugins: [],
};
