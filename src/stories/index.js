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

const data = [{
  key: '1',
  place_name: 'Sidney Oper House',
  status: 'Verified',
  modified_date: moment().format(),
  created_by: '@donutfino',
  display_name: 'Nuttawuth Chainilphan',
}, {
  key: '2',
  place_name: 'Astana Arena',
  status: 'Review',
  modified_date: moment().format(),
  created_by: '@gkassym',
  display_name: 'Gapur Kassym',
}, {
  key: '3',
  place_name: 'Tokya Tower',
  status: 'Verified',
  modified_date: moment().format(),
  created_by: '@kassym',
  display_name: 'Tulebay Erbolat',
}, {
  key: '4',
  place_name: 'Qaragandy Opera',
  status: 'Verified',
  modified_date: moment().format(),
  created_by: '@gafur',
  display_name: 'John Terry',
}];

class Stories extends Component {

  handleChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    return (
      <div id="places">
        <Breadcrumb>
          <Breadcrumb.Item>Stories</Breadcrumb.Item>
        </Breadcrumb>
        <div className="container">
          <h4>
            Manage Stories
            <div className="is-right">
              <Button.Group size="small">
                <Button>
                  <Link to="/stories/new"><Icon type="plus" />New Story</Link>
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

export default Stories;
