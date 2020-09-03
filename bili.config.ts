import { Config } from 'bili';

const config: Config = {
	output: {
    format: ['cjs', 'umd', 'esm'],
    fileName({ format }) {
      if (format === 'umd') {
        return 'vue-reform.js';
      }

      return 'vue-reform.[format].js';
    },
    moduleName: 'VueReform'
  },
  plugins: { vue: true }
};

export default config;
