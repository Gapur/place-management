import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const eventColumns = (campaignId) => [{
  title: 'From DateTime',
  dataIndex: 'dateTime',
  sorter: (a, b) => a.dateTime.length - b.dateTime.length,
  render: (value, record) => `${moment(record.fromDateTime).format('L')} - ${moment(record.toDateTime).format('L')}`
}, {
  title: 'Event Name',
  dataIndex: 'name',
  sorter: (a, b) => a.name.length - b.name.length,
  render: (value, record) => <Link to={`/campaigns/edit/${campaignId}/event/edit/${record.key}`}>{record.name}</Link>,
}, {
  title: 'City',
  dataIndex: 'city',
  sorter: (a, b) => a.city - b.city,
}, {
  title: 'Active',
  dataIndex: 'active',
  render: (value, record) => <span>{record.active ? 'Yes' : 'No'}</span>
}];

export const ruleColumns = [{
  title: 'Rule',
  dataIndex: 'rule',
  render: (text, record) => <Link to={`/campaigns/edit/${record.key}/rule/edit/${record.key}`}>{record.rule}</Link>,
}, {
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
  title: 'Active',
  dataIndex: 'active',
  render: (text, record) => <span>{record.active ? 'Yes' : 'No'}</span>
}];

export const ruleData = [{
  key: '1',
  rule: '#RO1234',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Check in 30s',
  datetime: 'Any',
  point: '100',
  active: true,
}, {
  key: '2',
  rule: '#RO1234',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Sognkran',
  datetime: moment().format(),
  point: '200',
  active: false,
}, {
  key: '3',
  rule: '#RO1234',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Naurys',
  datetime: moment().format(),
  point: '500',
  active: true,
}, {
  key: '4',
  rule: '#RO1234',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Toy',
  datetime: moment().format(),
  point: '500',
  active: true,
}];


export const campaignColumns = [{
  title: 'Campaign Name',
  dataIndex: 'name',
  sorter: (a, b) => a.name.length - b.name.length,
  render: (campaign, record) => <Link to={`/campaigns/edit/${record.key}`}>{record.name}</Link>,
}, {
  title: 'Created At',
  dataIndex: 'createdAt',
  sorter: (a, b) => a.createdAt.length - b.createdAt.length,
}, {
  title: 'Place',
  dataIndex: 'placeName',
  sorter: (a, b) => a.placeName.length - b.placeName.length,
  render: (place) => place ? place.defaultPlace.placeName : 'Not place',
}, {
  title: 'Active',
  dataIndex: 'active',
  render: (active) => active ? 'Yes' : 'No',
}, {
  title: 'Push Notification',
  dataIndex: 'pushNotificationActive',
  render: (pushNotifactive) => pushNotifactive ? 'Yes' : 'No',
}];
