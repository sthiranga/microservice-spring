const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist');

module.exports =  {

    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: distPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    devServer: {
        contentBase: distPath,
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new htmlWebpackPlugin({
            'template': path.resolve(__dirname,'src/index.html')
        }),
        new CopyWebpackPlugin(
            [{ from: 'src/asserts', to: 'asserts' }]
        )
    ]
};