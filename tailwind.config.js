/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      },
      minHeight: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
      },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
      },
      maxHeight: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
      },
      aspectRatio: {
        '3/4': '3/4',
        '4/3': '4/3'
      }
    },
    colors: {
      black: "#04080f",
      blue: {
        dark: "#507dbc",
        semi: "#a1c6ea",
        light: "#bbd1ea",
      },
      offwhite: "#dae3e5",
      transparent: 'transparent'
    }
  },
  plugins: []
};