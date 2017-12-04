import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import Sidebar from './Sidebar';

const { Header, Content } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
