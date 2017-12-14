import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import StoryForm from './components/StoryForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class EditStory extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { match: { params }, updateStory, push } = this.props;
    return updateStory({ variables: { ...values, id: params.id } })
      .then(() => push('/stories'))
      .catch(parseFormErrors);
  }

  render() {
    const { fetchStory, fetchUsers, fetchPlaces } = this.props;

    if (fetchPlaces.loading || fetchUsers.loading || fetchStory.loading) {
      return <div className="loader-indicator" />;
    }

    const initialValues = {
      ...fetchStory.Story,
      userId: fetchStory.Story.user.id,
      placeId: fetchStory.Story.place.id,
    };

    return (
      <div id="edit-story">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/stories">Stories</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Edit Story</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit Story</h3>

          <StoryForm
            initialValues={initialValues}
            users={fetchUsers.allUsers}
            places={fetchPlaces.allPlaces}
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
      placeName
    }
  }
`

const FETCH_USERS = gql`
  query FetchUsers {
    allUsers {
      id
      displayName
    }
  }
`

const FETCH_STORY = gql`
  query FetchStory($id: ID!) {
    Story(id: $id) {
      id
      createdAt
      updatedAt
      title
      story
      pictureURL {
        id
      }
      hashtag
      createdBy {
        id
        displayName
      }
      place {
        id
        placeName
      }
    }
  }
`
const UPDATE_STORY = gql`
  mutation UpdateStory(
    $id: ID!,
    $title: String!,
    $story: String!,
    $pictureURL: [Picture!]!,
    $hashtag: [String!]
    $placeId: ID,
    $createdById: ID,
  ) {
    updateStory (
      id: $id
      title: $title
      story: $story
      pictureURL: $pictureURL
      hashtag: $hashtag
      placeId: $placeId
      createdById: $createdById
    ) {
      id
    }
  }
`

const EditStoryScreen = compose(
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
  graphql(FETCH_STORY, {
    name: 'fetchStory',
    options: ({ match }) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: match.params.id,
      },
    }),
  }),
  graphql(UPDATE_STORY, {
    name: 'updateStory',
    options: {
      fetchPolicy: 'network-only',
    },
  })
)(EditStory);

export default connect(null, { push })(EditStoryScreen);
