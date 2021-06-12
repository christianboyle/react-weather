module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
