import React from 'react';
import { Button } from 'antd';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import './index.less';

export default function Layout(props) {
  const { route, routeParams, data, children } = props;
  return (
    <div id="layout">
      <Header route={route} />
      <div id="doc">
        <Menu
          route={route}
          defaultSelectedKey={routeParams.doc}
          data={data}
        />
        <div className="right-side">
          <article id="article">
            { children }
          </article>
          {/*<Footer />*/}
        </div>
      </div>
    </div>
  )
}
