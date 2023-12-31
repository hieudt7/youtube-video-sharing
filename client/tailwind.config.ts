import appThemeConfig from './src/utils/configs/appThemeConfig';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: appThemeConfig
  },
  
  plugins: [],
};
export default config;
