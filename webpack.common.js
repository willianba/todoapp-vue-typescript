const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            "scss": "vue-style-loader!css-loader!sass-loader",
            "sass": "vue-style-loader!css-loader!sass-loader?indentedSyntax",
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
