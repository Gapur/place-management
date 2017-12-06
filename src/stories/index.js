import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { storiesColumns, data } from '../shared/constants/storiesConstants';

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
            columns={storiesColumns}
            dataSource={data}
            expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default Stories;
