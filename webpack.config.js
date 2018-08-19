const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, './src/main.js')
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
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, 'dist/index.html'),
			template: './index.html',
			chunks: ['index']
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		open: true,
		host: '192.168.18.150',
		port: 9000
	}
}

