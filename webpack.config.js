var webpack = require("webpack"),
	path = require("path"),
	VueLoader = require('vue-loader');

module.exports = {
	mode: 'development',	//This is meant to be bundled afterward anyway
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
		new VueLoader.VueLoaderPlugin()
	],
	resolve: {
		alias: {
			'vue-ripper': path.resolve(__dirname, '../src/')
		},
		extensions: [".ts", '.vue']
	}
};