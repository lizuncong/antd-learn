var path = require('path');

module.exports = {
  // 放置markdown文件的目录，放在
  source: ['./components', './docs'],
  output: './_site',
  entry: {
    index: {
      theme: './_theme',
      htmlTemplate: './_theme/static/template.html'
    }
  },
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd'
  ],
  port: 9007, // 本地服务监听的端口
  webpackConfig(config) {
    config.resolve.alias = {
      'react-ui': path.join(process.cwd(), 'index'),
    };
    return config;
  }
};
