const { description } = require('../../package')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  title: 'Wealth Scales',
  description: description,
  base: '/wealthscales/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: "og:title", content:"Wealth Scales by lunarfish"}],
    ['meta', { name: "og:description", content:description}],
    ['meta', { name: "og:image", content:"//lunarfish.github.io/wealthscales/assets/images/wealthscales_preview.png"}],
    ['meta', { name: "og:url", content: "//lunarfish.github.io/wealthscales/"}]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: []
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$' // embed all javascript and css inline
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ]
}
