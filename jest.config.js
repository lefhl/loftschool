// const { defaults } = require('jest-config')

// module.exports = {
//   // preset: '@vue/cli-plugin-unit-jest',
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'json', 'vue'],
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.vue$': 'vue-jest',
//     '^.+\\.js$': 'babel-jest'
//   },
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '@comp': '<rootDir>/src/components/$1',
//     '@assets': '<rootDir>/src/assets/$1'
//   }
// }
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '@comp': '<rootDir>/src/components/$1'
  }
}
