import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const usersColumns = (userType) => [{
  title: 'Display Name',
  dataIndex: 'displayName',
  sorter: (a, b) => a.displayName.length - b.displayName.length,
  render: (text, record) =>
    <Link to={`/users/one-mappers/${userType}/edit/${record.id}`}>
      {`${record.firstName} ${record.lastName}`}
    </Link>,
}, {
  title: 'Status',
  dataIndex: 'status',
  filters: [{
    text: 'Verified',
    value: 'Verified',
  }, {
    text: 'Review',
    value: 'Review',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.status.indexOf(value) === 0,
  sorter: (a, b) => a.status.length - b.status.length,
}, {
  title: 'Last Login',
  dataIndex: 'lastLogin',
  sorter: (a, b) => a.lastLogin - b.lastLogin,
  render: (text) => text ? text : 'No logined',
}, {
  title: 'User Name',
  dataIndex: 'userName',
  sorter: (a, b) => a.userName - b.userName,
}, {
  title: 'City',
  dataIndex: 'city',
  filters: [{
    text: 'Bangkok',
    value: 'Bangkok',
  }, {
    text: 'Qaragandy',
    value: 'Qaragandy',
  }, {
    text: 'Tokyo',
    value: 'Tokyo',
  }],
  onFilter: (value, record) => record.city.indexOf(value) === 0,
  sorter: (a, b) => a.city - b.city,
}, {
  title: 'Country',
  dataIndex: 'country',
  sorter: (a, b) => a.country - b.country,
  filters: [{
    text: 'Japan',
    value: 'Japan',
  }, {
    text: 'Qazakhstan',
    value: 'Qazakhstan',
  }, {
    text: 'Thailand',
    value: 'Thailand',
  }],
  onFilter: (value, record) => record.country.indexOf(value) === 0,
}, , {
  title: 'Role',
  dataIndex: 'role',
  sorter: (a, b) => a.role - b.role,
  filters: [{
    text: 'Regulars',
    value: 'Regulars',
  }, {
    text: 'Partners',
    value: 'Partners',
  }, {
    text: 'Bloggers',
    value: 'Bloggers',
  }],
  onFilter: (value, record) => record.role.indexOf(value) === 0,
}];
