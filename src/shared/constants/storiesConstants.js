import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const storiesColumns = [{
  title: 'Story Title',
  dataIndex: 'storyTitle',
  sorter: (a, b) => a.storyTitle.length - b.storyTitle.length,
  render: (text, record) => <Link to={`/stories/edit/${record.key}`}>{record.storyTitle}</Link>,
}, {
  title: 'Place Name',
  dataIndex: 'name',
  sorter: (a, b) => a.name.length - b.name.length,
  render: (text, record) =>
    <Link to={`/places/edit/${record.place.id}`}>{record.place.name}</Link>,
}, {
  title: 'Created By',
  dataIndex: 'createdBy',
  sorter: (a, b) => a.createdBy - b.createdBy,
}, {
  title: 'Display Name',
  dataIndex: 'displayName',
  sorter: (a, b) => a.displayName - b.displayName,
  render: (text, record) =>
    <Link to={`/users/one-mappers/edit/${record.user.id}`}>
      {record.user.firstName + ' ' + record.user.lastName}
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
  title: 'Modified Date',
  dataIndex: 'updatedAt',
  sorter: (a, b) => a.updatedAt - b.updatedAt,
  render: (text) => text && moment(text).format('L'),
}];
