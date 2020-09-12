'use strict';

module.exports = {
  root: true,
  extends: '@extensionengine',
  rules: {
    'vue/comment-directive': 'off'
  },
  overrides: [{
    files: ['src/**', 'example/**', 'tests/**'],
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      jest: true
    }
  }]
};
