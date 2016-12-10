module.exports = {
    context:"",
    devtool:"inline-sourcemap",
    entry: "./js/src/index.js",
    module:{
    	loaders: [
    		{
    			test:/\.js$/,
    			exclude:/node_modules/,
    			loader:'babel-loader',
    			query:{
    				presets:['react','es2015']
    			}
    		}
    	]
    },
    output: {
        path: "./js/dist",
        filename: "app.js"
    },
    devServer:{
        contentBase:"",
        inline:true,
        stats:"errors-only"
    }
}