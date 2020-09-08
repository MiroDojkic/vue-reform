'use strict';

module.exports = {
  root: true,
  extends: '@extensionengine',
  rules: {
    'vue/comment-directive': 'off'
  },
  overrides: [{
    files: ['src/**', 'example/**'],
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    }
  }]
};
