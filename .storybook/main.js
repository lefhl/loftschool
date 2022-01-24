const path = require('path')

module.exports = {
  // "stories": [
  //   "../src/**/*.stories.mdx",
  //   "../src/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  addons: [
    "@storybook/addon-actions"
  ],
  stories: ["../src/components/**/*.stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", ],
  framework: "@storybook/vue3",
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    )

    config.resolve.alias['@comp'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets')
    // '@comp': path.resolve(__dirname, './src/components'),
        // '@assets': path.resolve(__dirname, './src/assets')
    config.resolve = {
      ...config.resolve,
      alias: config.resolve.alias
    }
    return config
  }
};
