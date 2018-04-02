var webpack = require('webpack');
var path = require('path');

module.exports = {
	// 页面入口文件配置，可以是一个或者多个入口文件
	entry: './src/main.ts',

	// 指定打包后的输出文件名，这个文件需要被引入index.html中
	output: {
		filename: './bundle.js'
	},

	// 定义解析模块路径时的配置，常用extension，可以用来指定模块后缀，这样引入模块时就不需要写后缀，它会自动补全
	resolve: {
		root: [path.join(__dirname, 'src')],
		extensions: ['', '.ts', '.js']
	},

	// 关键配置项，告知webpack每一类文件都需要使用什么加载器来处理
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' }
		]
	}
};
