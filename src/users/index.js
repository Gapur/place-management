import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { usersColumns, data } from '../shared/constants/usersConstants';

const USER_TYPES = [
  { value: 'regulars', label: 'Regulars' },
  { value: 'bloggers', label: 'Bloggers' },
  { value: 'partners', label: 'Partners' },
];

class Users extends Component {

  handleChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    const { match: { params } } = this.props;
    const userType = USER_TYPES.find(type => type.value == params.type);

    return (
      <div id="users">
        <Breadcrumb>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
          <Breadcrumb.Item>OneMappers</Breadcrumb.Item>
          <Breadcrumb.Item>
            {userType && userType.label}
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h4>
            Manage Users
            <div className="is-right">
              <Button.Group size="small">
                <Button>
                  <Link to="/users/one-mappers/new"><Icon type="plus" />New User</Link>
                </Button>
                <Button>
                  Report<Icon type="down" />
                </Button>
              </Button.Group>
            </div>
          </h4>

          <Table
            columns={usersColumns}
            dataSource={data}
            expandedRowRender={record => <p className="no-margin">{record.description}</p>}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default Users;
