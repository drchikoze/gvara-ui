const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

const extractCSS = new ExtractTextPlugin('[name].fonts.css');
const extractSCSS = new ExtractTextPlugin('[name].styles.css');

// const __dirname = path.resolve();
const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');

console.log('BUILD_DIR', BUILD_DIR);
console.log('SRC_DIR', SRC_DIR);

module.exports = (env = {}) => {
    return {
        entry: {
            index: `${SRC_DIR}/index.js`
        },
        output: {
            path:       BUILD_DIR,
            filename:   '[name].bundle.js',
            publicPath: '/'
        },
        // watch: true,
        devtool:   env.prod ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase:        BUILD_DIR,
            // port : 9001,
            historyApiFallback: true,
            compress:           true,
            hot:                true,
            open:               true
        },
        module: {
            rules: [
                {
                    test:    /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use:     {
                        loader:  'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                },
                {
                    test:   /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(scss)$/,
                    use: ['css-hot-loader'].concat(extractSCSS.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {alias: {'../images': 'images'}}
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    }))
                },
                {
                    test: /\.css$/,
                    use: extractCSS.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    loader: "file-loader",
                    options: {
                        // name: './images/[name].[hash].[ext]'
                    }
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[hash].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
            new webpack.NamedModulesPlugin(),
            extractCSS,
            extractSCSS,
            new HtmlWebpackPlugin(
                {
                    inject: true,
                    template: './public/index.html'
                }
            ),
            new CopyWebpackPlugin(
                [
                    // {from: './public/img', to: 'img'}
                    { from: 'scss/images', to: 'images' }
                ],
                {copyUnmodified: false}
            )
        ]
    };
};
