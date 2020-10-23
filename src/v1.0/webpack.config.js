'use strict';

module.exports = {
	entry: __dirname + '/src/app.js',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel',
			query: {
	        	presets: ['es2015']
	      	}
	    }]
	},
	output: {
		path: './build/js/',
		filename: 'bundle.js'
	}
}