import React, { Component } from 'react';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import StoryForm from './components/StoryForm';

class EditStory extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    const initialValues = {
      place_name: 'Astana Arena',
      modified_date: moment().format(),
      created_by: '@gkassym',
      display_name: 'Gapur Kassym',
      created_date: moment().format('MMMM Do YYYY, hh:mm'),
      user_name: 'Gapur Kassym',
      story_title: 'story title',
    }
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
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default EditStory;
