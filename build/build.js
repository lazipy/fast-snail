const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify-es');
const version = process.env.VERSION || require('../package.json').version;

const banner =
  '/*\n' +
  ' * Eagle-UI v' + version + '\n' +
  ' * Author: Eagle Team\n' +
  ' * (c) 2018-9-19 ~ ' + new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + '\n' +
  ' * Released under the MIT License.\n' +
  ' */';

const config = {
  'es6': {
    file: 'lib/eagle.esm.js',
    format: 'es',
    banner
  },
  'es6-min': {
    file: 'lib/eagle.esm.min.js',
    format: 'es'
  },
  'commonjs': {
    file: 'lib/eagle.common.js',
    format: 'cjs',
    banner
  },
  'commonjs-min': {
    file: 'lib/eagle.common.min.js',
    format: 'cjs'
  },
  'iife': {
    file: 'lib/eagle.js',
    format: 'iife',
    name: 'Eagle',
    banner
  },
  'iife-miin': {
    file: 'lib/eagle.min.js',
    format: 'iife',
    name: 'Eagle'
  },
  'umd': {
    file: 'lib/eagle.umd.js',
    format: 'umd',
    name: 'Eagle',
    banner
  },
  'umd-min': {
    file: 'lib/eagle.umd.min.js',
    format: 'umd',
    name: 'Eagle'
  }
}

const entry = {
  input: 'src/index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}

const entryUglify = {
  input: 'src/index.js',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}

function build () {
  let bundle = Object.create(null);
  Object.keys(config).forEach(async key => {
    if (key.indexOf('-') !== -1) {
      bundle = await rollup.rollup(entryUglify);
    } else {
      bundle = await rollup.rollup(entry);
    }
    await bundle.write(config[key]);
  });
}

build();
