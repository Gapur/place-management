import moment from 'moment';

export const storiesColumns = [{
  title: 'Place Name',
  dataIndex: 'place_name',
  sorter: (a, b) => a.place_name.length - b.place_name.length,
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
}, {
  title: 'Created By',
  dataIndex: 'created_by',
  sorter: (a, b) => a.created_by - b.created_by,
}, {
  title: 'Display Name',
  dataIndex: 'display_name',
  sorter: (a, b) => a.display_name - b.display_name,
}];

export const data = [{
  key: '1',
  place_name: 'Sidney Oper House',
  status: 'Verified',
  modified_date: moment().format(),
  created_by: '@donutfino',
  display_name: 'Nuttawuth Chainilphan',
  description: '400 Read, 233 Liked',
}, {
  key: '2',
  place_name: 'Astana Arena',
  status: 'Review',
  modified_date: moment().format(),
  created_by: '@gkassym',
  display_name: 'Gapur Kassym',
  description: '400 Read, 233 Liked',
}, {
  key: '3',
  place_name: 'Tokya Tower',
  status: 'Verified',
  modified_date: moment().format(),
  created_by: '@kassym',
  display_name: 'Tulebay Erbolat',
  description: '400 Read, 233 Liked',
}, {
  key: '4',
  place_name: 'Qaragandy Opera',
  status: 'Verified',
  modified_date: moment().format(),
  description: '400 Read, 233 Liked',
  created_by: '@gafur',
  display_name: 'John Terry',
}];
