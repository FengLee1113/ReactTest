import getWebpackCommonConfig from './getWebpackCommonConfig';
import webpack from 'webpack';
import WebpackStrip from 'webpack-strip';


export default function getWebpackProdConfig(args){
  let webpackConfig = getWebpackCommonConfig(args);
  webpackConfig.UglifyJsPluginConfig = {
    output: {
      ascii_only: true,
    },
    compress: {
      warnings: false,
    },
  };

  // disable console log and error in production
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: WebpackStrip.loader('console.log', 'console.error'),
  });

  webpackConfig.debug = false;
  webpackConfig.plugins = [...webpackConfig.plugins,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(webpackConfig.UglifyJsPluginConfig),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
  ];
  return webpackConfig;
}
