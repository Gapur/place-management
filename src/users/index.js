import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Users extends Component {
  render() {
    return (
      <div id="users">
        <Breadcrumb>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">OneMappers</a></Breadcrumb.Item>
          <Breadcrumb.Item>Regulars</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          content
        </div>
      </div>
    )
  }
}

export default Users;
