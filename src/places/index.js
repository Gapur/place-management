import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { placeColumns } from '../shared/constants/placesConstants';

class Places extends Component {

  render() {
    if (this.props.fetchPlaces.loading) {
      return <div className="loader-indicator" />;
    }
    
    const places = this.props.fetchPlaces.allPlaces;
    const dataSource = places.map(place => ({ ...place, key: place.id }));

    return (
      <div id="places">
        <Breadcrumb>
          <Breadcrumb.Item>Places</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h4>
            Manage Places
            <div className="is-right">
              <Button.Group size="small">
                <Button>
                  <Link to="/places/new"><Icon type="plus" />New Place</Link>
                </Button>
                <Button>
                  Report<Icon type="down" />
                </Button>
              </Button.Group>
            </div>
          </h4>

          <Table
            columns={placeColumns}
            dataSource={dataSource}
            expandedRowRender={record => <p className="no-margin">{record.description}</p>}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

const FETCH_PLACES = gql`
  query FetchPlaces {
    allPlaces {
      id
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

const PlacesScreen = graphql(FETCH_PLACES, {
  name: 'fetchPlaces',
  options: {
    fetchPolicy: 'network-only',
  },
})(Places);

export default PlacesScreen;
