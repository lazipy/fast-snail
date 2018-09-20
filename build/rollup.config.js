const env = process.env.NODE_ENV;

const output = {
  es: {
    file: 'lib/eagle.esm.js',
    format: 'es'
  },
  iife: {
    file: 'lib/eagle.js',
    name: 'Eagle',
    format: 'iife'
  },
  cjs: {
    file: 'lib/eagle.common.js',
    format: 'cjs'
  }
}

export default {
  input: 'src/index.js',
  output: output[env]
}
