const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../../src') // Поменяйте путь на соответствующий
  });

  config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));

  return config;
};
