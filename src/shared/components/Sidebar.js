import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <SubMenu
          key="dashboard"
          title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="users"
          title={<span><Icon type="user" /><span>Users</span></span>}
        >
          <Menu.Item key="admins">
            Admins
          </Menu.Item>
          <SubMenu
            key="onemappers"
            title={<span>OneMappers</span>}
          >
            <Menu.Item key="bloggers">
              <Link to="/users/one-mappers/bloggers">Bloggers</Link>
            </Menu.Item>
            <Menu.Item key="regulars">
              <Link to="/users/one-mappers/regulars">Regulars</Link>
            </Menu.Item>
            <Menu.Item key="partners">
              <Link to="/users/one-mappers/partners">Partners</Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="places">
          <Link to="/places"><Icon type="save" />Places</Link>
        </Menu.Item>
        <Menu.Item key="stories">
          <Link to="/stories"><Icon type="setting" />Stories</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
