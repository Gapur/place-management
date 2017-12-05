import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './Sidebar';
import Header from './Header';
import PlacesScreen from '../../places';
import UsersScreen from '../../users';

const { Content } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '24px 16px 0' }}>
            <Route exact path="/users" component={UsersScreen} />
            <Route exact path="/places" component={PlacesScreen} />
            <Route exact path="/dashboard" component={UsersScreen} />
            <Route exact path="/stories" component={UsersScreen} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
