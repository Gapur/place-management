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
  render: (text, record) => <Link to={`/campaigns/edit/${record.key}/event/edit/${record.key}`}>{record.event_name}</Link>,
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
  title: 'Badge',
  dataIndex: 'badge',
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
  badge: 'offline',
  active: true,
}, {
  key: '2',
  rule: '#RO1234',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Sognkran',
  datetime: moment().format(),
  point: '200',
  badge: 'online',
  active: false,
}, {
  key: '3',
  rule: '#RO1234',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Naurys',
  datetime: moment().format(),
  point: '500',
  badge: 'online',
  active: true,
}, {
  key: '4',
  rule: '#RO1234',
  place: 'Startup Cafe, Chiang Mai',
  notification: 'Nearby 300m',
  event: 'Toy',
  datetime: moment().format(),
  point: '500',
  badge: 'online',
  active: true,
}];


export const campaignColumns = [{
  title: 'Campaign Name',
  dataIndex: 'campaign_name',
  sorter: (a, b) => a.campaign_name.length - b.campaign_name.length,
  render: (text, record) => <Link to={`/campaigns/edit/${record.key}`}>{record.campaign_name}</Link>,
},{
  title: 'Partner Account',
  dataIndex: 'partner_account',
  sorter: (a, b) => a.partner_account.length - b.partner_account.length,
}, {
  title: 'From Date To Date',
  dataIndex: 'from_date_to_date',
}, {
  title: 'Push Notification',
  dataIndex: 'push_notification',
}, {
  title: 'Available in Countries',
  dataIndex: 'avaiable_in_countries',
}];

export const campaingData = [{
  key: '1',
  campaign_name: 'Air Campaign',
  partner_account: 'AirAsia',
  from_date_to_date: moment().format(),
  push_notification: 'notification',
  avaiable_in_countries: 'Thailand',
  description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
}, {
  key: '2',
  campaign_name: 'Air Campaign',
  partner_account: 'AirAsia',
  from_date_to_date: moment().format(),
  push_notification: 'notification',
  avaiable_in_countries: 'Thailand',
  description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
}, {
  key: '3',
  campaign_name: 'Air Campaign',
  partner_account: 'AirAsia',
  from_date_to_date: moment().format(),
  push_notification: 'notification',
  avaiable_in_countries: 'Thailand',
  description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
}, {
  key: '4',
  campaign_name: 'Air Campaign',
  partner_account: 'AirAsia',
  from_date_to_date: moment().format(),
  push_notification: 'notification',
  avaiable_in_countries: 'Thailand',
  description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
}];
