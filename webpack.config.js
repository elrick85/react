var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: './app.tsx',
        vendors: './vendors.ts',
        asset: './asset-modules.js',
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle/[name].js',
        chunkFilename: 'bundle/[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx', '.css', '.less', '.ttf'],
        modules: [path.join(__dirname, "node_modules")]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendors', 'asset']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

        new ExtractTextPlugin('[name].css')
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.tsx$/, loader: 'ts' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=bundle/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=image/svg+xml' }
        ]
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
}