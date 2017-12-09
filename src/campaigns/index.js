import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

class Campaigns extends Component {
  render() {
    return (
      <div id="campaign">
        <Breadcrumb>
          <Breadcrumb.Item>Campaigns</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h4>
            Manage Campaigns
            <div className="is-right">
              <Button.Group size="small">
                <Button>
                  <Link to="/campaigns/new"><Icon type="plus" />New Campaign</Link>
                </Button>
                <Button>
                  Report<Icon type="down" />
                </Button>
              </Button.Group>
            </div>
          </h4>
        </div>
      </div>
    )
  }
}

export default Campaigns;
