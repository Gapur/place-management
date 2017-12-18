import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { storiesColumns } from '../shared/constants/storiesConstants';

class Stories extends Component {

  render() {
    const { fetchStories: { loading, allStories } } = this.props;
    if (loading) {
      return <div className="loader-indicator" />;
    }
    const dataSource = allStories.map(story => ({ ...story, key: story.id }));

    return (
      <div id="places">
        <Breadcrumb>
          <Breadcrumb.Item>Stories</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h4>
            Manage Stories
            <div className="is-right">
              <Button.Group size="small">
                <Button>
                  <Link to="/stories/new"><Icon type="plus" />New Story</Link>
                </Button>
                <Button>
                  Report<Icon type="down" />
                </Button>
              </Button.Group>
            </div>
          </h4>

          <Table
            columns={storiesColumns}
            dataSource={dataSource}
            expandedRowRender={record => <p className="no-margin">{record.description}</p>}
          />
        </div>
      </div>
    )
  }
}

const FETCH_STORIES = gql`
  query FetchStories {
    allStories {
      id
      createdAt
      updatedAt
      title
      story
      status
      pictureURL
      hashtag
      createdBy {
        id
        username
        displayName
      }
      place {
        id
        placeName
      }
    }
  }
`

const StoriesScreen = graphql(FETCH_STORIES, {
  name: 'fetchStories',
  options: {
    fetchPolicy: 'network-only',
  },
})(Stories)

export default StoriesScreen;
