const businessInfos = require('../gatsby-theme-boilerplate-blog/package.json')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-boilerplate-blog',
      options: {
        fonts: [
          businessInfos.importFont.font01,
          businessInfos.importFont.font02,
          businessInfos.importFont.font03,
          businessInfos.importFont.font04,
        ],
        display: 'swap',
        preconnect: true,
        attributes: {
          rel: 'stylesheet preload prefetch',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
      },
    },
  ],
}
