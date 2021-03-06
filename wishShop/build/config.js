const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    mode: 'production',
    entry: {
        layout: resolve('src/main.js'),
    },
    output: {
        path: resolve('dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },
    module: {
        rules: [ {
            test: /\.(css|scss)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {

                }
            }, {
                loader: "css-loader",
                options: {
                    importLoaders: 1
                }
            }, {
                loader: "postcss-loader",
                options: {
                    ident: 'postcss',
                    plugins: [
                        require('autoprefixer')(),
                        require('cssnano')()
                    ]
                }
            }, {
                loader: "sass-loader"
            }]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components|libs)/,
            use: [ {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }, {
                loader: "eslint-loader",
            }]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 10000,
                    publicPath: '../images',
                    outputPath: 'images',
                    name: '[name].[ext]'
                }
            }, {
                loader: "img-loader",
                options: {
                    plugins: [
                        require('imagemin-gifsicle')({
                            interlaced: false
                        }),
                        require('imagemin-mozjpeg')({
                            progressive: true,
                            arithmetic: false
                        }),
                        require('imagemin-pngquant')({
                            floyd: 0.5,
                            speed: 11,
                            quality: [0.6, 0.6]
                        }),
                        require('imagemin-svgo')({
                            plugins: [
                                { removeTitle: true },
                                { convertPathData: false }
                            ]
                        })
                    ]
                }
            }]
        }]
    },
    resolve: {
        alias: {
            layer: resolve('src/libs/layer_mobile/layer.js'),
            "@src": resolve('src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        }),
        new CopyPlugin([
            { from: 'src/libs', to: 'libs' },
            { from: 'src/images', to: 'images' },
        ])
    ]
}