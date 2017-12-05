import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Places extends Component {
  render() {
    return (
      <div id="places">
        <Breadcrumb>
          <Breadcrumb.Item>Places</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          content
        </div>
      </div>
    )
  }
}

export default Places;
