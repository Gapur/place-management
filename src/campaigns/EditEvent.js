import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Link } from 'react-router-dom';

import EventForm from './components/EventForm';

class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <div id="edit-event">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/campaigns/edit/${params.campaignId}`}>Edit Campaign</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Edit Event</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit Event</h3>

          <EventForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default EditEvent;
