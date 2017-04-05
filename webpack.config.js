module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
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
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: function () {
        //             return [autoprefixer];
        //         }

        //     }
        // }),
   // new webpack.BannerPlugin("Copyright Flying Unicorns inc.")//在这个数组中new一个就可以了
  ],
}