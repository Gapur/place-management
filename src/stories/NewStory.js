import React, { Component } from 'react';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

class NewStory extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div id="new-story">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/stories">Stories</Link></Breadcrumb.Item>
          <Breadcrumb.Item>New Story</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Story</h3>
        </div>
      </div>
    );
  }
}

export default NewStory;
