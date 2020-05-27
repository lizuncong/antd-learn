---
title: 项目实战
order: 1
---
在真实项目开发中，你可能会需要Redux或者Mobx这样的数据流方案，React UI作为一个UI库，可以和任何React生态圈内的数据流方案
以及应用框架搭配使用。我们基于Redux推出了自己的最佳实践，以及可插拔的企业级应用框架，推荐你在项目中使用。

[dva](http://dvajs.com/)是一个基于Redux的轻量级数据流方案，概念来自elm，支持side effects、热替换、动态加载、react-native、SSR等，
已在生产环境广泛应用。

[umi](http://umijs.org/)则是一个可插拔的企业级react应用框架。umi以路由为基础的，支持[类next.js的约定式路由](https://umijs.org/zh/guide/router.html)，
以及各种进阶的路由功能，并以此进行功能扩展，比如[支持路由级的按需加载](https://umijs.org)。然后
配以完善的[插件体系](https://umiji.org/zh)，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求，同时提供

>你可能也会对[Ant Design Pro](https://pro.ant.design/)感兴趣，这是一个基于umi、dva和ant design的开箱即用的中台前端/设计解决方案。

本文会引导你使用Umi、dva和antd从0开始创建一个简单应用。

## 安装 Umi

推荐使用 yarn 创建 Umi 脚手架，执行以下命令。

```bash
$ mkdir myapp && cd myapp
$ yarn create @umijs/umi-app
$ yarn
```

> 如果你使用 npm，可执行 `npx @umijs/create-umi-app`，效果一致

## 安装插件集

执行以下命令，安装插件集（包括antd、dva、国际化等常用插件）：

```bash
# 或 npm i @umijs/preset-react -D
$ yarn add @umijs/preset-react -D
```

> 插件默认使用 `"antd": "^4.0.0"`，如果要使用固定版本的antd，你可以在项目里安装额外的 antd 依赖，`package.json` 里声明的 antd 依赖
会被优先使用。

## 新建路由

我们要写个应用来先显示产品列表。首先第一步是创建路由，路由可以想象成是组成应用的不同页面。然后通过命令创建
`/products` 路由，

```bash
$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css
```

在 `.umirc.ts` 中配置路由，如果有国际化需要，可以配置 `locale` 开启 antd 国际化：

```diff
import { defineConfig } from 'umi';

export default defineConfig({
+ locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
+   { path: '/products', component: '@/pages/products' }, 
  ],
}); 
```

运行 `yarn start` 然后在浏览器里打开 [http://localhost:8000/products](http://localhost:8000/products)，你应该能看到对应的页面。

## 编写 UI Component

随着应用的发展，你会需要在多个页面分享 UI 元素（或在一个页面使用多次），在 umi 里你可以把这部分抽成component。
我们来编写一个 `ProductList` component，这样就能在不同的地方显示产品列表了。

然后新建 `src/components/ProductList.tsx` 文件：

```js
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        )
      }
    }
  ]
  return <Table dataSource={products} columns={columns} />
}

export default ProductList

```
