import path from 'path';
import webpack from 'webpack';

const name = 'app';

const PATHS = {
  app: path.join(__dirname, 'index'),
};

module.exports = {
  entry: [
    PATHS.app,
  ],

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&'
           + 'localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
      {
        test: /\.(jsx?)$/,
        loaders: [
          'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0',
        ],
        include: PATHS.src,
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    path: PATHS.build,
    filename: `${name}.js`,
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
};
