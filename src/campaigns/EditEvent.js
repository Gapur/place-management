import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import EventForm from './components/EventForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { match: { params }, updateEvent, push } = this.props;
    return updateEvent({ variables: { ...values, id: params.id } })
      .then(() => push(`/campaigns/edit/${params.id}`))
      .catch(parseFormErrors);
  }

  render() {
    const { match: { params }, fetchEvent } = this.props;
    if (fetchEvent.loading) {
      return <div className="loader-indicator" />;
    }

    return (
      <div id="edit-event">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/campaigns/edit/${params.id || 1}`}>Edit Campaign</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Edit Event</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit Event</h3>

          <EventForm
            initialValues={fetchEvent.EventTable}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const FETCH_EVENT = gql`
  query FetchEvent($id: ID!) {
    EventTable(id: $id) {
      id
      name
      dateRange
      active
    }
  }
`

const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $id: ID!,
    $name: String!,
    $dateRange: [String!],
    $active: Boolean,
  ) {
    updateEvent (
      id: $id
      name: $name
      dateRange: $dateRange
      active: $active
    ) {
      id
    }
  }
`

const EditEventScreen = compose(
  graphql(FETCH_EVENT, {
    name: 'fetchEvent',
    options: ({ match }) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: match.params.campaignId,
      },
    }),
  }),
  graphql(UPDATE_EVENT, {
    name: 'updateEvent',
    options: {
      fetchPolicy: 'network-only',
    },
  })
)(EditEvent);

export default connect(null, { push })(EditEventScreen);
