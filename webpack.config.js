const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: __dirname,
  mode: process.env.NODE_ENV || 'production',

  entry: './src/index.js',

  output: {
      path: path.resolve('./dist/'),
      filename: "index.js"
  },

  module: {
  	rules: [
      {
        test: /\.scss$/,
        resolve: {
          extensions: ['.scss', '.sass'],
        },
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
          	presets: [
    			    "@babel/preset-env",
    			    "@babel/preset-react"
    			  ],
		        plugins: [
                '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ],
  },

  optimization: {
  	splitChunks: {
  		chunks: 'all'
  	}
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles/[name].css`
    }),
  ]
}