

// requireContext用法参考https://webpack.docschina.org/guides/dependency-management/
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.js$/);

// console.log('index.js...', req.keys())

module.exports = require('./components');
