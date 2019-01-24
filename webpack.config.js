var webpack = require("webpack"),
	path = require("path"),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	VueLoader = require('vue-loader');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	entry: {
		test: ['./index.ts'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'result'),
		chunkFilename: "[chunkhash].js"
	},
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			loader: 'ts-loader',
			options: {
				appendTsSuffixTo: [/\.vue$/]
			}
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			enforce: 'pre',
			test: /\.tsx?$/,
			exclude: [
				path.join(__dirname, '../node_modules')
			],
			use: "source-map-loader"
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					ts: 'ts-loader'
				}
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.ejs'),
			title: 'Bug expo'
		}),
		new VueLoader.VueLoaderPlugin()
	],
	resolve: {
		alias: {
		},
		extensions: [".ts", '.vue']
	}
};