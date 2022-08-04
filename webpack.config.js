const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js',
        library: 'bnplApi',
        publicPath: 'auto',
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }],
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.svg$/, use: 'svg-inline-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
        alias: {
            'ui-components': path.resolve(__dirname, 'src/ui-components/'),
            store: path.resolve(__dirname, 'src/store/'),
            constants: path.resolve(__dirname, 'src/constants/'),
            configs: path.resolve(__dirname, 'src/configs/'),
            components: path.resolve(__dirname, 'src/components/'),
            helpers: path.resolve(__dirname, 'src/helpers/'),
            assets: path.resolve(__dirname, 'src/assets/'),
            HttpService: path.resolve(__dirname, 'src/HttpService/'),
        },
    },
    devServer: {
        static: path.join(__dirname, 'build'),
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true,
    },
};

module.exports = config;
