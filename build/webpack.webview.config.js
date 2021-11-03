//@ts-check
const path = require('path');

/**@type {import('webpack').Configuration}*/
const config = {
    target: 'web',
    mode: 'development',

    entry: './src/webview/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist/webview'),
        filename: 'index.js',
    },
    devtool: false,
    externals: {
        vscode: 'commonjs vscode',
    },
    resolve: {
        alias: {
            '@store': path.resolve(__dirname, '../src/webview/stores/'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
module.exports = config;
