// const CopyPlugin = require("copy-webpack-plugin");
// const path = require("path");

module.exports = function override(config, env) {
  // config.plugins.push(
  //   new CopyPlugin({
  //     patterns: [
  //       {
  //         from: path.resolve(
  //           __dirname,
  //           "node_modules/pdfjs-dist/build/pdf.worker.min.mjs"
  //         ),
  //         to: path.resolve(__dirname, "public/static/js"),
  //       },
  //     ],
  //   })
  // );

  return config;
};
