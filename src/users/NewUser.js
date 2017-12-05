import React, { Component } from 'react';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div id="new-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/users">Users</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/users/one-mappers">OneMappers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>New User</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New User</h3>
        </div>
      </div>
    );
  }
}

export default NewUser;
