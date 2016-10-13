var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var helpers = require('./helpers');

module.exports = {
    entry: {
        vendors: './src/vendors.ts',
        app: './src/main.ts'
    },
    output: {
        path: helpers.root('build'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle/[name].js',
        chunkFilename: 'bundle/[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendors']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new ExtractTextPlugin('[name].css'),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.tsx$/, loader: 'ts' },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file?name=bundle/[name].[hash].[ext]'
            },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=bundle/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=image/svg+xml' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
}