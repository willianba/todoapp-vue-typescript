const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true
  }
});
