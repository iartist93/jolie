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
};
