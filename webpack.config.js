const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const mode = argv.mode || 'development';

    return {
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'index_bundle.js',
            library: 'BnplKzApi',
            libraryTarget: 'umd',
            // publicPath: argv.mode === 'production' ? '/bnpl-widget' : '',
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
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
            alias: {
                store: path.resolve(__dirname, 'src/store/'),
                constants: path.resolve(__dirname, 'src/constants/'),
                components: path.resolve(__dirname, 'src/components/'),
                context: path.resolve(__dirname, 'src/context/'),
                services: path.resolve(__dirname, 'src/services/'),
                helpers: path.resolve(__dirname, 'src/helpers/'),
                pages: path.resolve(__dirname, 'src/pages/'),
            },
        },
        devServer: {
            static: path.join(__dirname, 'build'),
            historyApiFallback: true,
            port: 3000,
            open: true,
            hot: true,
            proxy: {
                '**': {
                    target: 'https://dev.bnpl.kz',
                    secure: false,
                    changeOrigin: true,
                },
            },
        },
    };
};
