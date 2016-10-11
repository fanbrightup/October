var webpack = require('webpack');

module.exports = {
	entry:'./entry.js',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	module:{
	},
	plugins:[
		new webpack.BannerPlugin('This file is created by fanbright')
	]
}
