const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  devtool: "#source-map",
  optimization: {
    minimize: true
  },
  plugins: (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production"
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
});
