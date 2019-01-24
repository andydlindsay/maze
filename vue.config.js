const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: "vue-template-loader",
          exclude: /index.html/
        },
        {
          test: /\.(s*)css$/, 
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({}),
    ],
  }
}
