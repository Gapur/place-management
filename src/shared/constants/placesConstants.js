import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const placeColumns = [{
  title: 'Place Name',
  dataIndex: 'place_name',
  sorter: (a, b) => a.place_name.length - b.place_name.length,
  render: (text, record) => <Link to={`/places/edit/${record.key}`}>{record.place_name}</Link>,
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
  dataIndex: 'created_date',
  sorter: (a, b) => a.created_date - b.created_date,
}, {
  title: 'Created By',
  dataIndex: 'created_by',
  sorter: (a, b) => a.created_by - b.created_by,
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

export const data = [{
  key: '1',
  place_name: 'Sidney Oper House',
  status: 'Verified',
  created_date: moment().format(),
  created_by: '@donutfino',
  city: 'Bangkok',
  country: 'Thailand',
  source: 'Google',
  description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
}, {
  key: '2',
  place_name: 'Astana Arena',
  status: 'Review',
  created_date: moment().format(),
  created_by: '@gkassym',
  city: 'Qaragandy',
  country: 'Qazakhstan',
  source: 'Google',
  description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
}, {
  key: '3',
  place_name: 'Tokya Tower',
  status: 'Verified',
  created_date: moment().format(),
  created_by: '@kassym',
  city: 'Astana',
  country: 'Qazakhstan',
  source: 'Google',
  description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
}, {
  key: '4',
  place_name: 'Qaragandy Opera',
  status: 'Verified',
  created_date: moment().format(),
  created_by: '@gafur',
  city: 'Tokyo',
  country: 'Japan',
  source: 'OneMap',
  description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
}];
