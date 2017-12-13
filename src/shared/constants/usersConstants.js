import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { USER_GROUP } from './constants';

export const usersColumns = (userType) => [{
  title: 'Display Name',
  dataIndex: 'displayName',
  sorter: (a, b) => a.displayName.length - b.displayName.length,
  render: (text, record) =>
    <Link to={`/users/one-mappers/${userType}/edit/${record.id}`}>
      {record.displayName}
    </Link>,
}, {
  title: 'Status',
  dataIndex: 'onlineStatus',
  filters: [{
    text: 'Verified',
    value: 'Verified',
  }, {
    text: 'Review',
    value: 'Review',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.onlineStatus.indexOf(value) === 0,
  sorter: (a, b) => a.onlineStatus.length - b.onlineStatus.length,
}, {
  title: 'Last Login',
  dataIndex: 'lastSeen',
  sorter: (a, b) => a.lastSeen - b.lastSeen,
  render: (text) => text ? moment(text).format('L') : 'No logined',
}, {
  title: 'User Name',
  dataIndex: 'username',
  sorter: (a, b) => a.username - b.username,
}, {
  title: 'City',
  dataIndex: 'city',
  sorter: (a, b) => a.city - b.city,
}, {
  title: 'Country',
  dataIndex: 'country',
  sorter: (a, b) => a.country - b.country,
}, , {
  title: 'Role',
  dataIndex: 'group',
  sorter: (a, b) => a.group - b.group,
  filters: USER_GROUP.map(({ label, value }) => ({ text: label, value })),
  onFilter: (value, record) => record.group.indexOf(value) === 0,
  render: (text) => USER_GROUP.find(group => group.value == text).label,
}];
