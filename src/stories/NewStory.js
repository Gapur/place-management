import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import moment from 'moment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import StoryForm from './components/StoryForm';

class NewStory extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
    this.props.createStory({ variables: { ...values, placeId: "cjb36iucoqq3e0105fdbqt0hh", userId: null } })
      .then(() => this.props.push('/stories'))
      .catch(err => console.log(err.message));
  }

  render() {
    const initialValues = {
      createdBy: 1,
    }
    return (
      <div id="new-story">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/stories">Stories</Link></Breadcrumb.Item>
          <Breadcrumb.Item>New Story</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Story</h3>

          <StoryForm
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const CREATE_STORY = gql`
  mutation CreateStory(
      $storyTitle: String!,
      $story: String!,
      $createdBy: Int!,
      $placeId: ID,
      $userId: ID
  ) {
    createStory(
      createdBy: $createdBy
      storyTitle: $storyTitle
      story: $story
      tags: []
      placeId: $placeId
      userId: $userId
    ) {
      id
    }
  }
`

const NewStoryScreen = graphql(CREATE_STORY, {
  name: 'createStory',
  options: {
    fetchPolicy: 'network-only',
  },
})(NewStory);

export default connect(null, { push })(NewStoryScreen);
