var webpack = require('webpack');
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var src_dir = path.resolve(__dirname, 'src/');
var dist_dir = path.resolve(__dirname, 'dist/');

var config = {
	entry: __dirname + '/src/index.js',

	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: __dirname + '/src/',
				loader: 'babel'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
			// {
			// 	test: /\.css$/,
			// 	include: /src/,
			// 	loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			// },
			// {
			// 	test: /\.scss$/,
			// 	include: /src/,
			// 	loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			// }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
		// new ExtractTextPlugin("styles.css")

	],
	devtool: 'source-map',
	devServer: {
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		contentBase: './'
	}
	
};

module.exports = config;