import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const storiesColumns = [{
  title: 'Story Title',
  dataIndex: 'title',
  sorter: (a, b) => a.title.length - b.title.length,
  render: (text, record) => <Link to={`/stories/edit/${record.key}`}>{record.title}</Link>,
}, {
  title: 'Place Name',
  dataIndex: 'placeName',
  sorter: (a, b) => a.placeName.length - b.placeName.length,
  render: (text, record) =>
    <Link to={`/places/edit/${record.place.id}`}>{record.place.placeName}</Link>,
}, {
  title: 'Created By',
  dataIndex: 'createBy',
  sorter: (a, b) => a.createBy - b.createBy,
}, {
  title: 'Display Name',
  dataIndex: 'displayName',
  sorter: (a, b) => a.displayName - b.displayName,
  render: (text, record) =>
    <Link to={`/users/one-mappers/edit/${record.user.id}`}>
      {record.user.displayName}
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
