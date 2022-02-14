module.exports = [{
    entry:'./app.scss',
    output:{
        // This is necessary for webpack to compile
        // But we never use style-bindle.js
        filename:'style-bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'bundle.css',
                        },
                    },
                    {
                        loader:'extract-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            // Prefer Dart sass
                            implementation:require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter:false,
                        },
                    },
                ]
            }
        ]
    },
}]