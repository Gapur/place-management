import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Divider, Table } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

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
    const { fetchCampaigns, fetchPlaces, fetchUsers } = this.props;

    if (fetchPlaces.loading || fetchCampaigns.loading || fetchUsers.loading) {
      return <div className="loader-indicator" />;
    }

    const initialValues = {
      ...fetchCampaigns.Campaign,
      partnerId: fetchCampaigns.Campaign.partner.id,
      placeId: fetchCampaigns.Campaign.defaultPlace.id,
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
            users={fetchUsers.allUsers}
            feedNotificationImg={fetchCampaigns.Campaign.feedNotificationImg}
            photoUrl={fetchCampaigns.Campaign.photoUrl}
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

const FETCH_USERS = gql`
  query FetchUsers {
    allUsers {
      id
      displayName
    }
  }
`

const FETCH_PLACES = gql`
  query FetchPlaces {
    allPlaces {
      id
      placeName
    }
  }
`
const FETCH_CAMPAIGN = gql`
  query FetchCampaigns($id: ID!) {
    Campaign(id: $id) {
      id
      createdAt
      name
      description
      active
      photoUrl
      partner {
        id
        displayName
      }
      defaultPlace {
        id
        placeName
      }
      pushNotificationActive
      pushNotificationMsg
      feedNotificationActive
      feedNotificationImg
      feedNotificationMsg
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
    $partnerId: ID,
    $pushNotificationActive: Boolean,
    $pushNotificationMsg: String,
    $feedNotificationActive: Boolean,
    $feedNotificationImg: String,
    $feedNotificationMsg: String,
    $photoUrl: String!,
  ) {
    updateCampaign (
      id: $id
      name: $name
      availableCities: $availableCities
      description: $description
      defaultPlaceId: $defaultPlaceId
      active: $active
      partnerId: $partnerId
      pushNotificationActive: $pushNotificationActive
      pushNotificationMsg: $pushNotificationMsg,
      feedNotificationActive: $feedNotificationActive,
      feedNotificationImg: $feedNotificationImg,
      feedNotificationMsg: $feedNotificationMsg,
      photoUrl: $photoUrl,
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
  graphql(FETCH_USERS, {
    name: 'fetchUsers',
    options: {
      fetchPolicy: 'network-only',
    },
  }),
  graphql(FETCH_CAMPAIGN, {
    name: 'fetchCampaigns',
    options: ({ match }) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: match.params.id,
      },
    }),
  }),
  graphql(UPDATE_CAMPAIGN, {
    name: 'updateCampaign',
    options: {
      fetchPolicy: 'network-only',
    },
  })
)(EditCampaign);

export default connect(null, { push })(EditCampaignScreen);
