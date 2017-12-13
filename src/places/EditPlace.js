import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
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
      placeName
      addressAreaDistrict
      addressCityTown
      addressStateProvince
      addressCountry
      addressPostalCode
      locationLat
      locationLong
      source
      sourceId
      pictureURL
    }
  }
`
const UPDATE_PLACE = gql`
  mutation UpdatePlace(
    $id: ID!,
    $placeName: String!,
    $addressAreaDistrict: String,
    $addressCityTown: String,
    $addressStateProvince: String,
    $addressCountry: String,
    $addressPostalCode: String,
    $locationLat: Float,
    $locationLong: Float,
    $source: PlaceSource!,
    $sourceId: String,
    $pictureURL: String!,
  ) {
    updatePlace (
      id: $id
      placeName: $placeName
      addressAreaDistrict: $addressAreaDistrict
      addressCityTown: $addressCityTown
      addressStateProvince: $addressStateProvince
      addressCountry: $addressCountry
      addressPostalCode: $addressPostalCode
      locationLat: $locationLat
      locationLong: $locationLong
      source: $source
      sourceId: $sourceId,
      pictureURL: $pictureURL
    ) {
      placeName
      description
      address
      street
      addressAreaDistrict
      addressCityTown
      addressStateProvince
      addressCountry
      addressPostalCode
      locationLat
      locationLong
      source
      sourceId
      pictureURL
      createdAt
      createBy
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

export default connect(null, { push })(EditPlaceScreen);
