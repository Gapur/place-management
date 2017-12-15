import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import ConditionPlaceForm from './components/ConditionPlaceForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class NewConditionPlace extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { createCampaign, push, match: { params } } = this.props;
    return createCampaign({ variables: { ...values } })
      .then(() => push(`/campaigns/edit/${params.campaignId}`))
      .catch(parseFormErrors);
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <div id="new-condition-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/campaigns/edit/${params.campaignId || 1}`}>Edit Campaign</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>New Condition Place</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Condition Place</h3>

          <ConditionPlaceForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const CREATE_CONDITION = gql`
  mutation CreateConditionPlace(
    $name: String!,
    $pointReward: Int!,
    $active: Boolean,
    $distance: Int!,
    $fromDate: String!,
    $toDate: String!,
    $fromTime: String,
    $toTime: String
  ) {
    createCondition(
      name: $name
      pointReward: $pointReward
      active: $active
      distance: $distance
      fromDate: $fromDate
      toDate: $toDate
      fromTime: $fromTime
      toTime: $toTime
    ) {
      id
    }
  }
`
const NewConditionPlaceScreen = graphql(CREATE_CONDITION, {
  name: 'createConditionPlace',
  options: {
    fetchPolicy: 'network-only',
  },
})(NewConditionPlace);

export default connect(null, { push })(NewConditionPlaceScreen);
