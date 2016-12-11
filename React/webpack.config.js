module.exports = {
    context:"",
    devtool:"inline-sourcemap",
    entry: {
        app: "./js/src/ProReact.js",
        cardApp: "./js/src/CardApp.js"
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
        path: "./js/dist",
        filename: "[name].js"
    },
    devServer:{
        contentBase:"",
        inline:true,
        stats:"errors-only"
    }
}