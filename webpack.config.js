const path = require('path');
const fs = require('fs');

const webpackNodeExternals = require('webpack-node-externals');

const rootDir = fs.realpathSync(process.cwd());
const srcDir = path.resolve(rootDir, 'src');
const buildDir = path.resolve(rootDir, 'build');

const common = {
  mode: 'development',
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
    ],
  },
  resolve: {
    modules: ['node_modules', srcDir],
    extensions: ['.js', '.jsx', '.json'],
  },
};

const clientConfig = {
  ...common,
  target: 'web',
  name: 'client',
  entry: {
    client: path.resolve(srcDir, 'client/index.js'),
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
};

module.exports = [clientConfig, serverConfig];
