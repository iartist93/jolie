const path = require('path');

const vueSrc = '../../src';

module.exports = {
  dest: 'vuepress',
  serviceWorker: true,
  themeConfig: {
    sidebar: ['/', '/page1', '/page2', ['/page3', 'Custom link page']],
  },
  title: 'jolie',
  base: '/jolie/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, vueSrc),
      },
    },
  },
  scss: {
    additionalData: `@import "@/assets/css/colors.scss";
                     @import "@/assets/css/fonts.scss";
                     @import "@/assets/css/highlightableTextarea.scss";
                     @import "@/assets/css/main.scss";
    `,
  },
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // All options of ts-loader
        },
      },
    ],
  ],
};
