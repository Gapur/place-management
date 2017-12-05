import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const columns = [{
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
  sorter: (a, b) => a.status.length - b.address.length,
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
  onFilter: (value, record) => record.status.indexOf(value) === 0,
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
  onFilter: (value, record) => record.status.indexOf(value) === 0,
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
  onFilter: (value, record) => record.status.indexOf(value) === 0,
}];

const data = [{
  key: '1',
  place_name: 'John Brown',
  status: 'Verified',
  created_date: moment().format(),
  created_by: '@donutfino',
  city: 'Bangkok',
  country: 'Thailand',
  source: 'Google',
}, {
  key: '2',
  place_name: 'Jim Green',
  status: 'Review',
  created_date: moment().format(),
  created_by: '@gkassym',
  city: 'Qaragandy',
  country: 'Qazakhstan',
  source: 'Google',
}, {
  key: '3',
  place_name: 'Joe Black',
  status: 'Verified',
  created_date: moment().format(),
  created_by: '@kassym',
  city: 'Astana',
  country: 'Qazakhstan',
  source: 'Google',
}, {
  key: '4',
  place_name: 'Jim Red',
  status: 'Verified',
  created_date: moment().format(),
  created_by: '@gafur',
  city: 'Tokyo',
  country: 'Japan',
  source: 'OneMap',
}];

class Places extends Component {

  handleChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    return (
      <div id="places">
        <Breadcrumb>
          <Breadcrumb.Item>Places</Breadcrumb.Item>
        </Breadcrumb>
        <div className="container">
          <h4>
            Manage Places
            <div className="is-right">
              <Button.Group size="small">
                <Button>
                  <Link to="/places/new"><Icon type="plus" />New Place</Link>
                </Button>
                <Button>
                  Report<Icon type="down" />
                </Button>
              </Button.Group>
            </div>
          </h4>

          <Table
            columns={columns}
            dataSource={data}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default Places;
