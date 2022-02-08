const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'src/assets', 'favicon.ico'),
                to: path.resolve(__dirname, '.webpack/main/assets', 'favicon.ico')
            }
        ]
    })
];
