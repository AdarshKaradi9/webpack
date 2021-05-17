const path = require('path')

const mode = process.env.NODE_ENV  === 'production' ? 'production' : 'development'

module.exports = {
    mode: mode, // default production mode 
    
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },  

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // converts the higher verion js syntax to older version for backward compatibility
                }
                
            }
        ]
    },
    devtool: 'source-map', // retains the source of each files for debugging if not used everything is poitned to same bundled file
    
    devServer: {
        contentBase: './public'  // used along with webpack serve which serves the content/project provided i.e. dist directory on the browswer at http://localhost:8080/
    } 
}