import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { placeColumns, data } from '../shared/constants/placesConstants';

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
            columns={placeColumns}
            dataSource={data}
            expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default Places;
