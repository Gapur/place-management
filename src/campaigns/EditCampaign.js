import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Divider, Table } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import CampaignForm from './components/CampaignForm';
import { parseFormErrors } from '../shared/utils/form_errors';

import { ruleColumns, ruleData, eventColumns, eventData } from '../shared/constants/campaignConstants';

class EditCampaign extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { match: { params }, updateCampaign, push } = this.props;
    return updateCampaign({ variables: { ...values, id: params.id } })
      .then(() => push('/campaigns'))
      .catch(parseFormErrors);
  }

  render() {
    const { fetchCampaigns, fetchPlaces } = this.props;

    if (fetchPlaces.loading || fetchCampaigns.loading) {
      return <div className="loader-indicator" />;
    }

    const initialValues = {
      ...fetchCampaigns.Campaign,
      placeId: fetchCampaigns.Place.place.id,
    };

    return (
      <div id="edit-campaign">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Edit Campaign</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit Campaign</h3>

          <CampaignForm
            initialValues={initialValues}
            places={fetchPlaces.allPlaces}
            onSubmit={this.handleSubmit}
          />

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

const FETCH_PLACES = gql`
  query FetchPlaces {
    allPlaces {
      id
      placeName
    }
  }
`
const FETCH_CAMPAIGNS = gql`
  query FetchCampaigns {
    allCampaigns {
      id
      createdAt
      name
      description
      active
      defaultPlace {
        id
        placeName
      }
      pushNotificationActive
    }
  }
`

const UPDATE_CAMPAIGN = gql`
  mutation UpdateCampaign(
    $id: ID!,
    $name: String!,
    $availableCities: [String!],
    $description: String,
    $defaultPlaceId: ID,
    $active: Boolean,
    $pushNotificationActive: Boolean,
    $pushNotificationMsg: String,
    $feedNotificationActive: Boolean,
    $feedNotificationImg: String,
    $feedNotificationMsg: String,
  ) {
    updateCampaign (
      id: $id
      name: $name
      availableCities: $availableCities
      description: $description
      defaultPlaceId: $defaultPlaceId
      active: $active
      pushNotificationActive: $pushNotificationActive
      pushNotificationMsg: $pushNotificationMsg,
      feedNotificationActive: $feedNotificationActive,
      feedNotificationImg: $feedNotificationImg,
      feedNotificationMsg: $feedNotificationMsg,
    ) {
      id
    }
  }
`

const EditCampaignScreen = compose(
  graphql(FETCH_PLACES, {
    name: 'fetchPlaces',
    options: {
      fetchPolicy: 'network-only',
    },
  }),
  graphql(FETCH_CAMPAIGNS, {
    name: 'fetchCampaigns',
    options: {
      fetchPolicy: 'network-only',
    },
  }),
  graphql(UPDATE_CAMPAIGN, {
    name: 'updateCampaign',
    options: {
      fetchPolicy: 'network-only',
    },
  })
)(EditCampaign);

export default connect(null, { push })(EditCampaignScreen);
