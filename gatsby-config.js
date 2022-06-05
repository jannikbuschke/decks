module.exports = {
  pathPrefix: '/decks',
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        cli: true,
        contentPath: 'decks',
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['@mdx-deck/themes'],
      },
    },
  ],
};
