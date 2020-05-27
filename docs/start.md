---
title: 快速上手
order: 0
---

React UI致力于提供给程序员**愉悦**的开发体验。
>在开始之前，推荐先学习[React](http://reactjs.org)和[ES2015](http://babeljs.io/docs/learn-es2015/)，并
正确安装和配置了[Node.js](https://nodejs.org/)v8或以上。官方指南假设你已了解关于HTML、CSS和Javascript的中级
知识，并且已经完全掌握了React全家桶的正确开发方式。如果你刚开始学习前端或者React，将UI框架作为你的第一步可能不是最好的注意。

## 第一个例子

直接用下面的代码替换 `index.js` 的内容，用React的方式直接使用React UI组件。

```jsx 
import React from 'react';
import { Button } from 'react-ui';

const App = () => {
    return (
        <Button>Hello Button</Button>
    )
}

```

### 3. 探索更多组件用法

你可以在组件页面的左侧菜单查看组件列表，比如[Button](/components/button)组件，组件文档中提供了各类演示，最下方有组件API文档可以查阅。
在代码演示部分找到第一个例子，点击右下角的图标展开代码。然后依照演示代码的写法，修改 `index.js`，首先在 `import` 内引入 Button 组件：

```diff
- import { Alert } from 'react-ui';
+ import { Alert, Button } from 'react-ui';
```

然后在 `render` 内添加相应的jsx代码：

```diff
  <DatePicker onChange={value => this.handleChange(value)} />
-  当前日期是：{date ? date.format('YYYY-MM-DD') : '未选择'}
+ <Button>hello button</Button>
```

选择一个日期，在右侧预览区域就可以看到如图的效果。

好的，现在你已经会使用基本的React UI组件了，你可以在这个例子中继续探索其他组件的用法。
如果你遇到组件的 bug，欢迎报告bug。

### 4. 下一步

实际项目开发中，你会需要构建、调试、代理、打包部署等一系列工程化的需求。你可以阅读后面的
文档或者使用以下脚手架和范例：

- [文档1](http://www.baidu.com)
- [文档2](http://www.baidu.com)
- [文档3](http://www.baidu.com)
- 更多脚手架可以查看 [脚手架市场](http://www.baidu.com)

## 兼容性

React UI支持所有的现代浏览器和 IE11+。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |
