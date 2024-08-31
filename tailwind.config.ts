import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans, "")', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono, "")', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        bgPrimaryDark: '#10172a',
        bgPrimaryLight: colors.white,
        divider: {
          light: colors.slate[200],
          dark: colors.slate[800],
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
