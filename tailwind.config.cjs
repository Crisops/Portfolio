/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Crimson_Pro: ['Crimson Pro', 'sans-serif'],
      Hind_Vadodara: ['Hind Vadodara', 'sans-serif'],
      Hind_Guntur: ['Hind Guntur', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        16: 'repeat(auto-fit, minmax(50px, 1fr))',
        15: 'repeat(auto-fit, minmax(20px, 1fr))'
      },
      keyframes: {
        btnViewProyect: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        circleForm: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        circleForm2: {
          '0%': {
            transform: 'rotate(360deg)'
          },
          '100%': {
            transform: 'rotate(0deg)'
          }
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        progress: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '100%'
          }
        }
      }
    },
    animation: {
      btnViewProyect: '5s linear infinite',
      circleForm: 'linear infinite',
      circleForm2: 'linear infinite',
      spin: '500ms linear infinite',
      progress: '4s linear'
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
}
