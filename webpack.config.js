const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  // your existing configuration
  plugins: [
    // other plugins
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(
            path.dirname(require.resolve("pdfjs-dist/package.json")),
            "build/pdf.worker.min.js"
          ),
          to: "pdf.worker.min.js",
        },
      ],
    }),
  ],
  module: {
    rules: [
      // other rules
      {
        test: /\.js$/,
        include: /node_modules\/pdfjs-dist/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
