import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import EventForm from './components/EventForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { createEvent, push, match: { params } } = this.props;
    console.log(values);
    return createEvent({ variables: { ...values } })
      .then(() => push(`/campaigns/edit/${params.campaignId}`))
      .catch(parseFormErrors);
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <div id="new-event">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/campaigns/edit/${params.id || 1}`}>Edit Campaign</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>New Event</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Event</h3>

          <EventForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const CREATE_EVENT = gql`
  mutation CreataEvent(
    $name: String!,
    $dateRange: [String!],
    $active: Boolean,
  ) {
    createEventTable(
      name: $name
      dateRange: $dateRange
      active: $active
    ) {
      id
    }
  }
`
const NewEventScreen = graphql(CREATE_EVENT, {
  name: 'createEvent',
  options: {
    fetchPolicy: 'network-only',
  },
})(NewEvent);

export default connect(null, { push })(NewEventScreen);
