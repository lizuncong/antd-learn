import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function getComponentsMenuLink(meta) {
  const filename = meta.filename;
  const link = '/' + filename.slice(0, filename.indexOf('index.md') - 1);
  return <Link to={link}>{meta.title}</Link>;
}

function getComponentsMenuItem(menus) {
  return menus.sort((a, b) => (a.meta.order - b.meta.order)).map((item) => {
    return <Menu.Item key={item.key}>
      { getComponentsMenuLink(item.meta)}
    </Menu.Item>;
  });
}

function getComponentsMenuGroups(data) {
  const componentOrder = [
    '通用',
    '布局',
    '导航',
    '数据录入',
    '数据展示',
    '反馈',
    '其他'
  ];
  const menuGroups = componentOrder.map(category => ({
    category: category,
    menus: []
  }));
  for (let key in data) {
    if(key === 'about') continue;
    const curCategory = data[key].index.meta.category;
    const idx = componentOrder.indexOf(curCategory);
    if (idx !== -1) {
      const menuData = data[key].index;
      menuData.key = key;
      menuGroups[idx].menus.push(menuData);
    }
  }
  return menuGroups.map((item) => {
    return (<MenuItemGroup key={item.category} title={item.category}>
      { getComponentsMenuItem(item.menus)}
    </MenuItemGroup>);
  });
}

export default function ComponentsMenu(props) {
  const { data, defaultSelectedKey } = props;
  return (
    <Menu
      mode="inline"
      defaultOpenKeys={['components']}
      selectedKeys={[defaultSelectedKey]}
    >
      <Menu.Item key="about">
        <Link to="/components/about">基本介绍</Link>
      </Menu.Item>
      <SubMenu key={'components'} title={'组件'}>
        { getComponentsMenuGroups(data) }
      </SubMenu>
    </Menu>
  );
}
