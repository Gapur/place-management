import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import PlaceForm from './components/PlaceForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class EditPlace extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { match: { params }, updatePlace, push } = this.props;
    return updatePlace({ variables: { ...values, id: params.id } })
      .then(() => push('/places'))
      .catch(parseFormErrors);
  }

  render() {
    const { fetchPlace: { loading, Place } } = this.props;
    if (loading) {
      return <div className="loader-indicator" />;
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
            initialValues={Place}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const FETCH_PLACE = gql`
  query FetchPlace($id: ID!) {
    Place(id: $id) {
      createdAt
      name
      description
      address
      street
      arrea
      city
      state
      country
      placeId
      lat
      long
      source
      profilePicture
      createdBy
      status
    }
  }
`
const UPDATE_PLACE = gql`
  mutation UpdatePlace(
    $id: ID!,
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
  ) {
    updatePlace (
      id: $id
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
    ) {
      name
      description
      address
      street
      arrea
      city
      state
      country
      placeId
      lat
      long
      source
      profilePicture
      createdBy
      createdAt
      status
    }
  }
`

const EditPlaceScreen = compose(
  graphql(FETCH_PLACE, {
    name: 'fetchPlace',
    options: ({ match }) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: match.params.id,
      },
    }),
  }),
  graphql(UPDATE_PLACE, {
    name: 'updatePlace',
    options: {
      fetchPolicy: 'network-only',
    },
  })
)(EditPlace);

export default connect(null, { push })(EditPlaceScreen);;
