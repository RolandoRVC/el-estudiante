const common = require("./webpack.common.js");
const merge = require("webpack-merge");

const MiniCssExtractPlugin =  require("mini-css-extract-plugin");


module.exports = merge(common,{
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,"css-loader","sass-loader"
                ]
            },
            {
                test: /\html$/,
                use:[
                    {
                        loader: "html-loader",
                        options:{
                            minimize:true,
                            attrs:false
                        }
                    }
                ]
            }
        ]
    },
    plugins:[new MiniCssExtractPlugin({
        filename:"css/bundle.css"
    })]
});
