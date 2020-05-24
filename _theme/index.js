const path = require('path');

module.exports = {
  lazyLoad: true,
  routes: [
    {
      path: '/',
      component: './template/Home'
    },
    {
      path: '/docs/:doc',
      component: './template/Docs'
    }
  ]
};
