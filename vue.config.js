module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/css/colors.scss";
                         @import "./src/assets/css/fonts.scss";
                         @import "./src/assets/css/highlightableTextarea.scss";
                         @import "./src/assets/css/main.scss";
        `,
      },
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
