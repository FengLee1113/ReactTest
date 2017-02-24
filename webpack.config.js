var uisfReact = require.resolve('./scripts/dist/babel-plugin-uisf-react/index.js');
module.exports = function(webpackConfig) {
  // webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push([uisfReact, {
    // const { libDir = 'lib', libraryName = defaultLibraryName, style } = opts;
    // const path = `${libraryName}/${libDir}/${camel2Dash(methodName)}`;
    style: true,  // if true, use less
    libDir: 'components',
    libraryName: 'uisf-mobile',
  }]);

  return webpackConfig;
};
