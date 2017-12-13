import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PlaceForm from './components/PlaceForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class NewPlace extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { push, createPlace } = this.props;
    return createPlace({ variables: { ...values } })
      .then(() => push('/places'))
      .catch(parseFormErrors);
  }

  render() {
    const initialValues = {
      createdBy: 'gkassym',
      status: 'Verified',
    }
    return (
      <div id="new-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/places">Places</Link></Breadcrumb.Item>
          <Breadcrumb.Item>New Place</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Place</h3>

          <PlaceForm
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const CREATE_PLACE = gql`
  mutation CreatePlace(
      $name: String!,
      $description: String!,
      $address: String!,
      $street: String,
      $arrea: String,
      $city: String,
      $state: String,
      $country: String!,
      $placeId: String!,
      $lat: String!,
      $long: String!,
      $source: String,
      $profilePicture: String,
      $createdBy: String!,
      $status: String!,
  ) {
    createPlace(
      name: $name
      description: $description
      address: $address
      street: $street
      arrea: $arrea
      city: $city
      state: $state
      country: $country
      placeId: $placeId
      lat: $lat
      long: $long
      source: $source
      profilePicture: $profilePicture
      createdBy: $createdBy
      status: $status
    ) {
      id
    }
  }
`

const NewPlaceScreen = graphql(CREATE_PLACE, {
  name: 'createPlace',
  options: {
    fetchPolicy: 'network-only',
  },
})(NewPlace);

export default connect(null, { push })(NewPlaceScreen);
