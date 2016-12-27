module.exports = {
    context:"",
    devtool:"inline-sourcemap",
    entry: {
        let: "./js/src/let.js",
        arrowFunction: "./js/src/arrowFunction.js",
        templateLiteral: "./js/src/templateLiteral.js",
        generator: ["babel-polyfill","./js/src/generator.js"],
        generatorAsynch: ["babel-polyfill","./js/src/generatorAsynch.js"],
        spread: "./js/src/spread.js"
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