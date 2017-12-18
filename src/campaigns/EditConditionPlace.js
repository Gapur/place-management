import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import ConditionPlaceForm from './components/ConditionPlaceForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class EditConditionPlace extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { match: { params }, updateConditionPlace, push } = this.props;
    return updateConditionPlace({ variables: { ...values, id: params.campaignId } })
      .then(() => push(`/campaigns/edit/${params.campaignId}`))
      .catch(parseFormErrors);
  }

  render() {
    const { match: { params }, fetchConditionPlace } = this.props;

    if (fetchConditionPlace.loading) {
      return <div className="loader-indicator" />;
    }

    return (
      <div id="edit-condition">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/campaigns/edit/${params.id || 1}`}>Edit Campaign</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Edit Condition</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit Condition</h3>

          <ConditionPlaceForm
            initialValues={fetchConditionPlace.ConditionPlace}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const FETCH_CONDITION_PLACE = gql`
  query FetchConditionPlace($id: ID!) {
    ConditionPlace(id: $id) {
      id
      pointReward
      active
      distance
      fromDate
      toDate
      fromTime
      toTime
      badgeReward {
        id
        name
        photoURL
      }
    }
  }
`

const UPDATE_CONDITION_PLACE = gql`
  mutation UpdateConditionPlace(
    $id: ID!,
    $pointReward: Int!,
    $active: Boolean,
    $badgeRewardId: ID!,
    $distance: Int!,
    $fromDate: String!,
    $toDate: String!,
    $fromTime: String,
    $toTime: String
  ) {
    updateConditionPlace (
      id: $id
      pointReward: $pointReward
      active: $active
      distance: $distance
      fromDate: $fromDate
      toDate: $toDate
      fromTime: $fromTime
      toTime: $toTime
      badgeRewardId: $badgeRewardId
    ) {
      id
    }
  }
`

const EditConditionPlaceScreen = compose(
  graphql(FETCH_CONDITION_PLACE, {
    name: 'fetchConditionPlace',
    options: ({ match }) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: match.params.campaignId,
      },
    }),
  }),
  graphql(UPDATE_CONDITION_PLACE, {
    name: 'updateConditionPlace',
    options: {
      fetchPolicy: 'network-only',
    },
  })
)(EditConditionPlace);

export default connect(null, { push })(EditConditionPlaceScreen);
