var webpack =require("webpack");

module.exports = {
    devtool:"source-map",
    entry: {
        index:__dirname + "/src/index.js"
    }, 
    output: {
        path: __dirname + "/dist", 
        filename: "[name].bundle.js",/
        publicPath:"/dist/"   

    },

    devServer: {
        inline:true,
        contentBase: "./",  
        port: '8088',

        historyApiFallback: true,

            //配置服务器支持反向代理功能
        proxy:{
           '/v4/api/*': {
                  target: 'http://m.maizuo.com',
                  host: 'm.maizuo.com',
                  changeOrigin:true
              },
              "/Index":"http://127.0.0.1/test/public/"

        }        

        
    },


    module:{
        loaders:[
         
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            {
                test:/\.js$/, //随便起的test 名字
                exclude: /node_modules/, 
                //排除多个
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
                
            },

            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[ext]?[hash]' 
                }
            }, //添加对字体文件的支持。

            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]'
                }
            
            }
            
        ]
    },

    plugins:[
        // new webpack.optimize.UglifyJsPlugin({
        //   output: {
        //     comments: false,  // 移除所有的注释
        //   },
        //   compress: {
        //     warnings: false
        //   }
        // })
    ]    
}
