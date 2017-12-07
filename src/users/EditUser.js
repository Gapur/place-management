import React, { Component } from 'react';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import UserForm from './components/UserForm';

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    const initialValues = {
      created_date: moment().format('MMMM Do YYYY, hh:mm'),
      created_by: 'gkassym',
      place_name: 'Sidney Oper House',
      user_name: '@donutfino',
      city: 'Bangkok',
      country: 'Thailand',
    }

    return (
      <div id="edit-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/users">Users</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/users/one-mappers">OneMappers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Edit User</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit User</h3>

          <UserForm
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default EditUser;
