import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { storiesColumns, data } from '../shared/constants/storiesConstants';

class Stories extends Component {

  handleChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    if (this.props.fetchStories.loading) {
      return <div className="loader-indicator" />;
    }
    const stories = this.props.fetchStories.allStories;
    console.log('stire', stories);
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
            dataSource={data}
            expandedRowRender={record => <p className="no-margin">{record.description}</p>}
            onChange={this.handleChange}
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
      storyTitle
      story
      tags {
        id
        name
      }
      user {
        id
        firstName
        lastName
        email
      }
      place {
        id
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
