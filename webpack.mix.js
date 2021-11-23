const mix = require("laravel-mix");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .react()
    .css("resources/css/app.css", "public/css")
    .webpackConfig({
        plugins: [
            new CleanWebpackPlugin({
                verbose: true,
                dry: true,
                cleanStaleWebpackAssets: false,
                protectWebpackAssets: false,
                cleanOnceBeforeBuildPatterns: ["public/css/*.css", "public/js/*.js"],
            }),
        ],
    });
