import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Link } from 'react-router-dom';

import RuleForm from './components/RuleForm';

class NewRule extends Component {
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
      <div id="new-rule">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/campaigns/edit/${params.campaignId}`}>Edit Campaign</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>New Rule</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Rule</h3>

          <RuleForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default NewRule;
