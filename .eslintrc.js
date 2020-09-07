'use strict';

module.exports = {
  root: true,
  extends: '@extensionengine',
  overrides: [{
    files: ['src/**', 'example/**'],
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    }
  }]
};
