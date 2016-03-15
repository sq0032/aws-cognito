module.exports = {
    entry: [
        "./js/app.js"
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module:{
        loaders:[
            { test: /\.css$/, loader: "style!css"},
//            {
//              test: /\.jsx?$/,
//              exclude: /(node_modules|bower_components)/,
//              loader: 'react-hot'
//            },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                babelrc: false,
//                plugins: ['transform-decorators-legacy' ],
                presets: ['react', 'es2015', 'stage-0']
              }
            }
        ],
        noParse: [
          /aws\-sdk/,
        ]      
    }
}