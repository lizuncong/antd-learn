const path = require('path');

module.exports = {
  lazyLoad: false,
  home: '/',
  routes: [
    {
      path: '/',
      component: './template/Home'
    },
    {
      path: '/components/:doc',
      component: './template/Components/index'
    },
    {
      path: '/docs/:doc',
      component: './template/Docs/index'
    }
  ]
};
