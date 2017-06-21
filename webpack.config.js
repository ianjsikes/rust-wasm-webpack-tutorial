module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
  },
  module: {
    rules: [
      {
        test: /\.rs$/,
        use: {
          loader: 'rust-wasm-loader',
          options: {
            path: 'build'
          }
        }
      }
    ]
  },
  externals: {
    'fs': true,
    'path': true,
  }
}
