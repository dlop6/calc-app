// .storybook/main.js
module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials'
  ],
}
