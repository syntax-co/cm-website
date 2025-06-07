/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light:'var(--light)',
        lightOpac:'var(--light-opac)',
        primary:'var(--primary)',
        primaryOpac:'var(--primary-opac)',
        secondary:'var(--secondary)',
        secondaryOpac:'var(--secondary-opac)',
      },
    },
  },
  plugins: [],
};
