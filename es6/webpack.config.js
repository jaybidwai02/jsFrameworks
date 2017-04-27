module.exports = {
    context:"",
    devtool:"inline-sourcemap",
    entry: {
        let: "./js/src/let.js",
        destructuring: "./js/src/destructuring.js",
        arrowFunction: "./js/src/arrowFunction.js",
        templateLiteral: "./js/src/templateLiteral.js",
        class: "./js/src/class.js",
        module: "./js/src/module.js",
        singelDefaultExport: "./js/src/singelDefaultExport.js",
        iterator: ["babel-polyfill","./js/src/iterator.js"],
        generator: ["babel-polyfill","./js/src/generator.js"],
        generatorAsynch: ["babel-polyfill","./js/src/generatorAsynch.js"],
        spread: "./js/src/spread.js",
        sw:"./SW/sw.js",
        swApp:"./SW/sw-app.js"
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