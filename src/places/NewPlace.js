import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import moment from 'moment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PlaceForm from './components/PlaceForm';

class NewPlace extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    const initialValues = {
      created_by: 'gkassym',
      registrationDate: moment().format('MMMM Do YYYY, hh:mm'),
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

const CREATE_USER = gql`
  mutation CreateUser(
      $firstName: String!,
      $lastName: String!,
      $email: String!,
      $password: String!,
      $gender: String,
      $birthDate: String,
      $country: String,
      $city: String,
      $phone: String,
      $userName: String!,
      $picture: String,
      $bio: String,
      $registrationDate: DateTime!
      $createdBy: String!,
      $lastLogin: DateTime
      $status: String!
      $role: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      gender: $gender
      birthDate: $birthDate
      country: $country
      city: $city
      phone: $phone
      userName: $userName
      picture: $picture
      bio: $bio
      registrationDate: $registrationDate
      createdBy: $createdBy
      lastLogin: $lastLogin
      status: $status
      role: $role
      story: []
    ) {
      id
    }
  }
`

const NewUserScreen = graphql(CREATE_USER, {
  name: 'createUser',
  options: {
    fetchPolicy: 'network-only',
  },
})(NewUser);

export default NewPlace;
