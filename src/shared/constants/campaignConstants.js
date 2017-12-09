import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const eventColumns = [{
  title: 'Date (to Date)',
  dataIndex: 'date',
  sorter: (a, b) => a.date.length - b.date.length,
}, {
  title: 'Event Name',
  dataIndex: 'event_name',
  sorter: (a, b) => a.event_name.length - b.event_name.length,
  render: (text, record) => <Link to={`/campaign/rules/edit/${record.key}`}>{record.event_name}</Link>,
}, {
  title: 'City',
  dataIndex: 'city',
  sorter: (a, b) => a.city - b.city,
}, {
  title: 'Active',
  dataIndex: 'active',
  render: (text, record) => <span>{record.active ? 'Yes' : 'No'}</span>
}];

export const eventData = [{
  key: '1',
  date: moment().format(),
  event_name: 'New Year Party',
  city: 'Bangkok',
  active: true,
}, {
  key: '2',
  date: moment().format(),
  event_name: 'Sognkran',
  city: 'Chiang Mai',
  active: false,
}, {
  key: '3',
  date: moment().format(),
  event_name: 'Naurys',
  city: 'Qaragandy',
  active: true,
}, {
  key: '4',
  date: moment().format(),
  event_name: 'Toy',
  city: 'Astana',
  active: true,
}];

export const ruleColumns = [{
  title: 'Place(s)',
  dataIndex: 'place',
  sorter: (a, b) => a.place.length - b.place.length,
}, {
  title: 'Notification',
  dataIndex: 'notification',
  sorter: (a, b) => a.notification.length - b.notification.length,
}, {
  title: 'Event',
  dataIndex: 'event',
  sorter: (a, b) => a.event.length - b.event.length,
}, {
  title: 'Date Time',
  dataIndex: 'datetime',
}, {
  title: 'Point',
  dataIndex: 'point',
}, {
  title: 'Badge',
  dataIndex: 'badge',
}, {
  title: 'Active',
  dataIndex: 'active',
  render: (text, record) => <span>{record.active ? 'Yes' : 'No'}</span>
}];

export const ruleData = [{
  key: '1',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Check in 30s',
  datetime: 'Any',
  point: '100',
  badge: 'offline',
  active: true,
}, {
  key: '2',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Sognkran',
  datetime: moment().format(),
  point: '200',
  badge: 'online',
  active: false,
}, {
  key: '3',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Naurys',
  datetime: moment().format(),
  point: '500',
  badge: 'online',
  active: true,
}, {
  key: '4',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Toy',
  datetime: moment().format(),
  point: '500',
  badge: 'online',
  active: true,
}];