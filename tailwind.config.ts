import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderColor: {
        main: 'var(--separator)'
      },
      colors: {
        'primary-text': 'var(--primary-text)',
        'primary-background': 'var(--primary-background)',
        'hover-overlay': 'var(--hover-overlay)',
        'separator': 'var(--separator)',
        'tertiary-icon': 'var(--tertiary-icon)'
      }
    },
  },
  plugins: [nextui()],
}
export default config
