/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F6F8FC',
          subtle: '#EEF2F9',
        },
        primary: {
          DEFAULT: '#2563EB', // Electric blue
          hover: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        cyan: {
          accent: '#06B6D4',
          glow: '#22D3EE',
          dark: '#0891B2',
        },
        navy: {
          DEFAULT: '#081A32', // Dark navy contrast
          deep: '#040E1C',
          surface: '#0B2244',
          card: '#0D274E',
        },
        foreground: {
          DEFAULT: '#101828', // Near-black typography
          muted: '#475467',
          subtle: '#667085',
          light: '#98A2B3',
        },
        border: {
          light: '#E4E7EC',
          dark: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Satoshi', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03)',
        'card': '0 4px 20px -2px rgba(16, 24, 40, 0.06), 0 2px 8px -2px rgba(16, 24, 40, 0.04)',
        'card-hover': '0 20px 35px -8px rgba(37, 99, 235, 0.12), 0 8px 16px -4px rgba(16, 24, 40, 0.06)',
        'glow-blue': '0 0 35px rgba(37, 99, 235, 0.35)',
        'glow-cyan': '0 0 35px rgba(6, 182, 212, 0.35)',
        'glow-navy': '0 20px 40px rgba(4, 14, 28, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-very-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
