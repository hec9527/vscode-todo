//@ts-check
const path = require('path');

/**@type {import('webpack').Configuration}*/
const config = {
    target: 'node',
    mode: 'development',

    entry: './src/extension/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist/extension'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    devtool: false,
    externals: {
        vscode: 'commonjs vscode',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
};
module.exports = config;
