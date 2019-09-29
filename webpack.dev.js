const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: "/dist/",
    historyApiFallback: true,
    noInfo: true,
    writeToDisk: true
  }
});
