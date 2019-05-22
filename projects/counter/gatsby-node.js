const merge = require('webpack-merge')

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const originalWebpackConfig = getConfig()

  const reactNativeWebConfig = {
    resolve: {
      extensions: [
        '.web.js',
        '.js',
      ],
      alias: {
        'react-native$': 'react-native-web',
      },
    },
  }

  const newConfig = merge(reactNativeWebConfig, originalWebpackConfig)

  actions.replaceWebpackConfig(newConfig)
}