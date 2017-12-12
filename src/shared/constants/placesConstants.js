import React from 'react';
import { Link } from 'react-router-dom';

export const placeColumns = [{
  title: 'Place Name',
  dataIndex: 'name',
  sorter: (a, b) => a.name.length - b.name.length,
  render: (text, record) => <Link to={`/places/edit/${record.key}`}>{record.name}</Link>,
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
  title: 'Created Date',
  dataIndex: 'createdAt',
  sorter: (a, b) => a.createdAt - b.createdAt,
}, {
  title: 'Created By',
  dataIndex: 'createdBy',
  sorter: (a, b) => a.createdBy - b.createdBy,
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
}, {
  title: 'Source',
  dataIndex: 'source',
  sorter: (a, b) => a.source - b.source,
  filters: [{
    text: 'Google',
    value: 'Google',
  }, {
    text: 'OneMap',
    value: 'OneMap',
  }],
  onFilter: (value, record) => record.source.indexOf(value) === 0,
}];
