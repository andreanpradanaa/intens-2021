const Webpack = require("webpack");

module.exports = {
    entry: {
        // vendor: "./src/vendor.js",
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     type: "asset/resource",
            // },
            // {
            //     test: /\.(png|jp(e*)g|svg|ttf|otf)$/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 name: "[name].[ext]",
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(less|css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ],
    },
};
