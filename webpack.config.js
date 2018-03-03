const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "styles.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js"
	},
	devServer: {
	  contentBase: "./build",
	  port: 3000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }],
          fallback: "style-loader"
	      })
			},
		],
	},
	plugins: [
		extractSass,
	  // new webpack.DefinePlugin({
	  //   'process.env': {
	  //     'NODE_ENV': JSON.stringify('production')
	  //   }
	  // })
	]
};