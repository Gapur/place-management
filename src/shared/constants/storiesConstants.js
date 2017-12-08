import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const storiesColumns = [{
  title: 'Story Title',
  dataIndex: 'story_title',
  sorter: (a, b) => a.story_title.length - b.story_title.length,
  render: (text, record) => <Link to={`/stories/edit/${record.key}`}>{record.story_title}</Link>,
}, {
  title: 'Place Name',
  dataIndex: 'place_name',
  sorter: (a, b) => a.place_name.length - b.place_name.length,
  render: (text, record) => <Link to={`/places/edit/${record.key}`}>{record.place_name}</Link>,
}, {
  title: 'Created By',
  dataIndex: 'created_by',
  sorter: (a, b) => a.created_by - b.created_by,
}, {
  title: 'Display Name',
  dataIndex: 'display_name',
  sorter: (a, b) => a.display_name - b.display_name,
  render: (text, record) => <Link to={`/users/one-mappers/edit/${record.key}`}>{record.display_name}</Link>,
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
  dataIndex: 'modified_date',
  sorter: (a, b) => a.modified_date - b.modified_date,
}];

export const data = [{
  key: '1',
  story_title: 'Sidney travel',
  place_name: 'Sidney Oper House',
  created_by: '@donutfino',
  display_name: 'Nuttawuth Chainilphan',
  status: 'Verified',
  modified_date: moment().format(),
  description: '400 Read, 233 Liked',
}, {
  key: '2',
  story_title: 'Astana City',
  place_name: 'Astana Arena',
  created_by: '@gkassym',
  display_name: 'Gapur Kassym',
  status: 'Review',
  modified_date: moment().format(),
  description: '400 Read, 233 Liked',
}, {
  key: '3',
  story_title: 'Japan Story',
  place_name: 'Tokya Tower',
  created_by: '@kassym',
  display_name: 'Tulebay Erbolat',
  status: 'Verified',
  modified_date: moment().format(),
  description: '400 Read, 233 Liked',
}, {
  key: '4',
  story_title: 'Shakhter Town',
  place_name: 'Qaragandy Opera',
  created_by: '@gafur',
  display_name: 'John Terry',
  status: 'Verified',
  modified_date: moment().format(),
  description: '400 Read, 233 Liked',
}];
