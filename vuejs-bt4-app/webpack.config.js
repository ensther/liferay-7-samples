const { VueLoaderPlugin } = require('vue-loader')
var path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './index.js',
	output: {
		path: path.resolve(path.join(__dirname, 'build')),
		filename: 'webpack.bundle.js',
	},
	devServer: {
		open: true,
		openPage: '',
		
		proxy: {},
		publicPath: '/o/vuejs-bt4-app/',
	},
	plugins: [new require('copy-webpack-plugin')(['../assets']), new VueLoaderPlugin()],
	module: {
		rules: [ { test: /src\\.*\.js$/, use: 'babel-loader' }, { test: /\.vue$/, loader: 'vue-loader'} ],
	},
	resolve: {
		extensions: [ '.js', '.vue' ]
	}
};
