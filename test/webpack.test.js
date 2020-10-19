var { join } = require("path");
var VirtualModulesPlugin = require('webpack-virtual-modules');
var virtualModules = new VirtualModulesPlugin({
	// js files
	'../node_modules/module-foo.js': 'module.exports = { foo: "foo" };',
	'./node_modules/module-foo.js': 'module.exports = { foo: "foo" };',
	'./module-foo.js': 'module.exports = { foo: "foo" };',
	// ts files
	'../node_modules/module-foo.ts': 'module.exports = { foo: "foo" };',
	'./node_modules/module-foo.ts': 'module.exports = { foo: "foo" };',
	'./module-foo.ts': 'module.exports = { foo: "foo" };',
	// global name
	'module-foo': 'module.exports = { foo: "foo" };'
});

module.exports = {
	mode: 'development',
	context: __dirname,
	entry: {
		'test1': ['./test1.ts'],
		'test2': ['./test2.ts']
	},
	output: {
		filename: '[name].js',
		path: join(__dirname, '../result')
	},
	plugins: [
		virtualModules
	],
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: /node_modules/,
			loader: 'ts-loader'
		}]
	},
	resolve: {
		extensions: ['.ts', '.js']
	}
};