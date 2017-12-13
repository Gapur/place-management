import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import StoryForm from './components/StoryForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class NewStory extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { createStory, push } = this.props;
    return createStory({ variables: { ...values } })
      .then(() => push('/stories'))
      .catch(parseFormErrors);
  }

  render() {
    const { fetchPlaces: { allPlaces }, fetchUsers: { allUsers } } = this.props;
    if (this.props.fetchPlaces.loading || this.props.fetchUsers.loading) {
      return <div className="loader-indicator" />;
    }

    const initialValues = {
      createdBy: 'test',
      status: 'Verified',
    };

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
            places={allPlaces}
            users={allUsers}
            onSubmit={this.handleSubmit}
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
      name
    }
  }
`

const FETCH_USERS = gql`
  query FetchUsers {
    allUsers {
      id
      firstName
      lastName
    }
  }
`

const CREATE_STORY = gql`
  mutation CreateStory(
    $storyTitle: String!,
    $story: String!,
    $storyPicture: String,
    $createdBy: String!,
    $status: String!,
    $placeId: ID,
    $userId: ID,
  ) {
    createStory(
      createdBy: $createdBy
      storyTitle: $storyTitle
      story: $story
      storyPicture: $storyPicture
      status: $status
      tags: []
      placeId: $placeId
      userId: $userId
    ) {
      id
    }
  }
`

const NewStoryScreen = compose(
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
  graphql(CREATE_STORY, {
    name: 'createStory',
    options: {
      fetchPolicy: 'network-only',
    },
  }),
)(NewStory);

export default connect(null, { push })(NewStoryScreen);
