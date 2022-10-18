const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackNodeExternals = require('webpack-node-externals');

const rootDir = fs.realpathSync(process.cwd());
const srcDir = path.resolve(rootDir, 'src');
const buildDir = path.resolve(rootDir, 'build');


const common = {
  mode: 'development',
  resolve: {
    modules: ['node_modules', srcDir],
    extensions: ['.js', '.jsx', '.json'],
  },
};

const clientConfig = {
  ...common,
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: srcDir,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  target: 'web',
  name: 'client',
  entry: {
    client: path.resolve(srcDir, 'client/App.js'),
  },
  output: {
    publicPath: '/',
    path: buildDir,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval-source-map',
};

const serverConfig = {
  ...common,
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: srcDir,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
           MiniCssExtractPlugin.loader,
           'css-loader',
           'sass-loader',
        ]
     }
    ],
  },
  target: 'node',
  name: 'server',
  entry: {
    server: path.resolve(srcDir, 'server/index.js'),
  },
  output: {
    publicPath: '/',
    path: buildDir,
    filename: 'server.js',
  },
  devtool: 'eval-source-map',
  externals: [webpackNodeExternals()],
  node: {
    __dirname: false,
  },
  plugins: [
    new MiniCssExtractPlugin(),
 ],
};

module.exports = [clientConfig, serverConfig];
