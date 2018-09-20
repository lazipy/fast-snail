import babel from 'rollup-plugin-babel';
const env = process.env.NODE_ENV;

const output = {
  es: {
    file: 'lib/eagle.esm.js',
    format: 'es',
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ]
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
  rollup.rollup({
    entry: 'src/main.js',
    plugins: [ babel() ]
}).then( function ( bundle ) {
    bundle.write({
        format: 'umd',
        moduleName: 'main', //umd或iife模式下，若入口文件含 export，必须加上该属性
        dest: 'rel/bundle.js'
    });
});
}
