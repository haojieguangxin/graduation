/**
 * Created by zhang-j on 2018/3/19.
 */
module.exports = {
    entry: {
        'index': __dirname + '/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'style-loader'
                    }
                ]
            }
        ]
    },
    plugins: [

    ]
};