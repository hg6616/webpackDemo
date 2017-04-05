var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
       // path: __dirname + '/public',
        filename: "[name]-[hash].js"
//        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        // colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
        , port: 8011
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            }
            ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可

            }
            ,
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader?modules'//添加对样式表的处理
            // },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                        }
                    }
                ]
            }
            // ,
            // {
            //     loader: 'postcss-loader',
            //     options: {
            //         sourceMap: 'inline',
            //     }
            // }
        ]
    },
    // postcss: [
    //     require('autoprefixer')//调用autoprefixer插件
    // ],

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
     //   new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  //  new ExtractTextPlugin("style.css")
    new ExtractTextPlugin("[name]-[hash].css")
    ],
}