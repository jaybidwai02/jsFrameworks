module.exports = {
    context:"",
    devtool:"inline-sourcemap",
    entry: {
        app: "./src/js/app.js",
    },
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
        path: "./dist/js",
        filename: "[name].js"
    },
    devServer:{
        contentBase:"",
        inline:true,
        stats:"errors-only"
    }
}