const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'index': path.resolve(__dirname, './src/index.js'),
		'example/button/index': path.resolve(__dirname, './example/button/index.js'),
		'example/starry-sky/index': path.resolve(__dirname, './example/starry-sky/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					modules: true
				}
			}]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'dist/index.html'),
			template: './index.html',
			chunks: []
		}),
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'dist/example/button/index.html'),
			template: './example/button/index.html',
			chunks: ['example/button/index']
		}),
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'dist/example/starry-sky/index.html'),
			template: './example/starry-sky/index.html',
			chunks: ['example/starry-sky/index']
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		open: true,
		host: 'localhost',
		port: 9000
	}
}

