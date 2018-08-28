const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const title = 'Vue ssr boilerplate by PIXIRE agency';
const keywords = 'vue, ssr, boilerplate, PIXIRE';
const description = 'Simple vue ssr boilerplate by PIXIRE agency';

module.exports = {

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    overlay: true
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue ssr boilerplate',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'apple-mobile-web-app-title', content: title},
        {name: 'application-name', content: title},
        {name: 'msapplication-TileColor', content: '#333333'},
        {name: 'theme-color', content: '#ffffff'},
        /* Seo */
        {hid: 'description', name: 'description', content: description},
        {hid: 'keywords', name: 'keywords', content: keywords},
        {hid: 'ogtitle', property: 'og:title', content: title},
        {hid: 'ogdescription', property: 'og:description', content: description},
        //{hid: 'ogimage', property: 'og:image', content: ogImage},
      ],
      templateContent: '<div id="app"> </div>'
    }),
    new VueLoaderPlugin()
  ]
};
