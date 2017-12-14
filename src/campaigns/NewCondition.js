import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import ConditionForm from './components/ConditionForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class NewCondition extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { createCampaign, push, match: { params } } = this.props;
    console.log(values);
    return createCampaign({ variables: { ...values } })
      .then(() => push(`/campaigns/edit/${params.campaignId}`))
      .catch(parseFormErrors);
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <div id="new-condition">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/campaigns/edit/${params.campaignId || 1}`}>Edit Campaign</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>New Condition</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Condition</h3>

          <ConditionForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const CREATE_CONDITION = gql`
  mutation CreateCondition(
    $name: String!,
    $pointReward: Int!,
    $active: Boolean,
  ) {
    createCondition(
      name: $name
      pointReward: $pointReward
      active: $active
    ) {
      id
    }
  }
`
const NewConditionScreen = graphql(CREATE_CONDITION, {
  name: 'createCondition',
  options: {
    fetchPolicy: 'network-only',
  },
})(NewCondition);

export default connect(null, { push })(NewConditionScreen);
