const { injectBabelPlugin } = require('react-app-rewired')

module.exports = (config) => {
  // eslint-disable-next-line no-param-reassign
  config = injectBabelPlugin(['styled-components'], config)
  return config
}
