import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';

class Campaign extends Component {
  render() {
    return (
      <div id="campaign">
        <Breadcrumb>
          <Breadcrumb.Item>Campaign</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h4>Campaign details</h4>
        </div>
      </div>
    )
  }
}

export default Campaign;
