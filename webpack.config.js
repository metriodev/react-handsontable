module.exports = {
  entry: {
    './dist/react-handsontable': './src/index',
    './demo/dist/react-handsontable-demo-bundle': './demo/demo-bundle'
  },

  output: {
    path: './',
    filename: '[name].js',
    library: 'ReactHandsontable',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: (/\.css$/), loader: "style-loader!css-loader"
      },
      {
        test: require.resolve('handsontable'),
        loader: 'expose?Handsontable'
      },
      {
        test: require.resolve('numbro'),
        loader: 'expose?numbro'
      },
      {
        test: require.resolve('moment'),
        loader: 'expose?moment'
      }, {
        test: require.resolve('pikaday'),
        loader: 'expose?Pikaday'
      }, {
        test: require.resolve('zeroclipboard'),
        loader: 'expose?ZeroClipboard'
      }
    ]
  }
};