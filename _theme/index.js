module.exports = {
  lazyLoad: false,
  home: '/',
  routes: [
    {
      path: '/',
      component: './template/Home/index'
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
