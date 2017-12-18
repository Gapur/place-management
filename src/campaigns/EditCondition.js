import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import ConditionForm from './components/ConditionForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class EditCondition extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { match: { params }, updateCondition, push } = this.props;
    return updateCondition({ variables: { ...values, id: params.campaignId } })
      .then(() => push(`/campaigns/edit/${params.campaignId}`))
      .catch(parseFormErrors);
  }

  render() {
    const { match: { params }, fetchCondition } = this.props;

    if (fetchCondition.loading) {
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

          <ConditionForm
            initialValues={fetchCondition.Condition}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const FETCH_CONDITION = gql`
  query FetchCondition($id: ID!) {
    Condition(id: $id) {
      id
      pointReward
      active
      distance
      fromDateTime
      toDateTime
      badgeReward {
        id
        name
        photoURL
      }
    }
  }
`

const UPDATE_CONDITION = gql`
  mutation UpdateCondition(
    $id: ID!,
    $pointReward: Int!,
    $active: Boolean,
    $badgeRewardId: ID!,
    $distance: Int!,
    $fromDateTime: DateTime!,
    $toDateTime: DateTime!,
  ) {
    updateCondition (
      id: $id
      pointReward: $pointReward
      active: $active
      distance: $distance
      fromDateTime: $fromDateTime
      toDateTime: $toDateTime
      badgeRewardId: $badgeRewardId
    ) {
      id
    }
  }
`

const EditConditionScreen = compose(
  graphql(FETCH_CONDITION, {
    name: 'fetchCondition',
    options: ({ match }) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: match.params.campaignId,
      },
    }),
  }),
  graphql(UPDATE_CONDITION, {
    name: 'updateCondition',
    options: {
      fetchPolicy: 'network-only',
    },
  })
)(EditCondition);

export default connect(null, { push })(EditConditionScreen);
