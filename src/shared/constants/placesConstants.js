import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ONLINE_STATUS, PLACE_SOURCE } from './constants';

export const placeColumns = [{
  title: 'Place Name',
  dataIndex: 'placeName',
  sorter: (a, b) => a.placeName.length - b.placeName.length,
  render: (text, record) => <Link to={`/places/edit/${record.key}`}>{record.placeName}</Link>,
}, {
  title: 'Status',
  dataIndex: 'status',
  filters: ONLINE_STATUS.map(({ label, value }) => ({ text: label, value })),
  filterMultiple: false,
  onFilter: (value, record) => record.status.indexOf(value) === 0,
  sorter: (a, b) => a.status.length - b.status.length,
}, {
  title: 'Created Date',
  dataIndex: 'createdAt',
  sorter: (a, b) => a.createdAt - b.createdAt,
  render: (text) => text && moment(text).format('L'),
}, {
  title: 'Created By',
  dataIndex: 'user',
  sorter: (a, b) => a.user.displayName - b.user.displayName,
  render: (user) => user && user.displayName,
}, {
  title: 'City',
  dataIndex: 'addressCityTown',
  sorter: (a, b) => a.addressCityTown - b.addressCityTown,
}, {
  title: 'Country',
  dataIndex: 'addressCountry',
  sorter: (a, b) => a.addressCountry - b.addressCountry,
}, {
  title: 'Source',
  dataIndex: 'source',
  sorter: (a, b) => a.source - b.source,
  filters: PLACE_SOURCE.map(({ label, value }) => ({ text: label, value })),
  onFilter: (value, record) => record.source.indexOf(value) === 0,
}];
