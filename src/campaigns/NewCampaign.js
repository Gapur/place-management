import React, { Component } from 'react';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import CampaignForm from './components/CampaignForm';

class NewCampaign extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    const initialValues = {
      created_date: moment().format('MMMM Do YYYY, hh:mm'),
      created_by: 'gkassym',
      registration_date: moment().format('MMMM Do YYYY, hh:mm'),
    }
    return (
      <div id="new-campaign">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>New Campaign</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Campaign</h3>

          <CampaignForm
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default NewCampaign;
