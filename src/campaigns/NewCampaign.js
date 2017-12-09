import React, { Component } from 'react';
import { Breadcrumb, Button, Icon, Divider, Table } from 'antd';
import { Link } from 'react-router-dom';

import CampaignForm from './components/CampaignForm';

import { ruleColumns, ruleData, eventColumns, eventData } from '../shared/constants/campaignConstants';

class NewCampaign extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div id="new-campaign">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>New Campaign</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Campaign</h3>

          <CampaignForm onSubmit={this.handleSubmit} />

          <Divider />

          <h4>Events Calendar</h4>
          
          <Table
            columns={eventColumns}
            dataSource={eventData}
          />

          <Divider />

          <h4>Rules</h4>

          <Table
            columns={ruleColumns}
            dataSource={ruleData}
          />
        </div>
      </div>
    );
  }
}

export default NewCampaign;
