var path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, './' + dir);
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: resolve('dist'),
    filename: 'build.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'root': resolve('src'),
      'components': resolve('src/components'),
      'services': resolve('src/services')
    }
  },
  module: {
    rules: [ 
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080
  }
}