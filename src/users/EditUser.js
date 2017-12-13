import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import UserForm from './components/UserForm';
import { USER_TYPES } from '../shared/constants/constants';
import { parseFormErrors } from '../shared/utils/form_errors';

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { match: { params }, updateUser, push } = this.props;
    const userType = USER_TYPES.find(type => type.value == params.type);
    return updateUser({ variables: { ...values, id: params.id } })
      .then(() => push(`/users/one-mappers/${userType.value}`))
      .catch(parseFormErrors);
  }

  render() {
    const { match: { params }, fetchUser: { loading, User } } = this.props;
    const userType = USER_TYPES.find(type => type.value == params.type);

    if (loading) {
      return <div className="loader-indicator" />;
    }

    return (
      <div id="edit-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/users">Users</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/users/one-mappers">OneMappers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/users/one-mappers/${userType.value}`}>{userType.label}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Edit User</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit User</h3>

          <UserForm
            initialValues={User}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const FETCH_USER = gql`
  query FetchUser($id: ID!) {
    User(id: $id) {
      firstName
      lastName
      email
      password
      gender
      birthDate
      country
      city
      phone
      userName
      picture
      bio
      registrationDate
      createdBy
      createdAt
      lastLogin
      status
      role
    }
  }
`
const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!,
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
  ) {
    updateUser (
      id: $id
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
    ) {
      firstName
      lastName
      email
      password
      gender
      birthDate
      country
      city
      phone
      userName
      picture
      bio
      registrationDate
      createdBy
      createdAt
      lastLogin
      status
      role
    }
  }
`

const EditUserScreen = compose(
  graphql(FETCH_USER, {
    name: 'fetchUser',
    options: ({ match }) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: match.params.id,
      },
    }),
  }),
  graphql(UPDATE_USER, {
    name: 'updateUser',
    options: {
      fetchPolicy: 'network-only',
    },
  })
)(EditUser);

export default connect(null, { push })(EditUserScreen);
