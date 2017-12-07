import React, { Component } from 'react';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import PlaceForm from './components/PlaceForm';

class EditPlace extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    const initialValues = {
      create_date: moment().format('MMMM Do YYYY, hh:mm'),
      create_by: 'gkassym',
      registration_date: moment().format('MMMM Do YYYY, hh:mm'),
      place_name: 'Sidney Oper House',
      created_date: moment().format(),
      created_by: '@donutfino',
      city: 'Bangkok',
      country: 'Thailand',
      description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
    }
    return (
      <div id="edit-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/places">Places</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Edit Place</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit Place</h3>

          <PlaceForm
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default EditPlace;
