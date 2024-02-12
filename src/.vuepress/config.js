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
    ['meta', { property: "og:title", content:"Wealth Scales by lunarfish"}],
    ['meta', { property: "og:type", content:"article"}],
    ['meta', { property: "og:description", content:description}],
    ['meta', { property: "og:image", content:"//lunarfish.github.io/wealthscales/assets/images/wealthscales_preview.png"}],
    ['meta', { property: "og:url", content: "//lunarfish.github.io/wealthscales/"}],
    ['meta', { name: "twitter:card", content: "summary_large_image"}]
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
