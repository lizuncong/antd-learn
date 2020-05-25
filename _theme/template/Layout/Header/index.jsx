import React from 'react';
import { Link } from 'react-router';
import { Icon } from 'antd';
import './index.less';

export default (props) => {
  let path = ''
  if(props.route && props.route.path){
    path = props.route.path
  }
  return (
    <header id="header">
      <h2>React UI</h2>
      <ul>
        <li>
          <Link to="/">
            <Icon type="home"/><span>首页</span>
          </Link>
        </li>
        <li>
          <Link
            className={path.indexOf('docs') === -1 ? '' : 'current'}
            to="/docs/start"
          >
            <Icon type="bulb"/><span>快速开始</span>
          </Link>
        </li>
        <li>
          <Link
            className={path.indexOf('components') === -1 ? '' : 'current'}
            to="/components/about"
          >
            <Icon type="appstore-o"/><span>组件文档</span>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/lizuncong/react-ui.git"
            target="_blank"
          >
            <Icon type="github"/><span>GitHub</span>
          </a>
        </li>
      </ul>
    </header>
  )
}
