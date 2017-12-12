import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import moment from 'moment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import UserForm from './components/UserForm';

const USER_TYPES = [
  { value: 'regulars', label: 'Regulars' },
  { value: 'bloggers', label: 'Bloggers' },
  { value: 'partners', label: 'Partners' },
];

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
    this.props.createUser({ variables: { ...values } })
      .then(() => this.props.push('/users'))
      .catch(err => console.log(err.message));
  }

  render() {
    const { match: { params } } = this.props;
    const userType = USER_TYPES.find(type => type.value == params.type);
    console.log(userType);
    const initialValues = {
      registrationDate: moment().format(),
      createdBy: 'Test',
      status: 'Review',
      role: userType && userType.value,
    };

    return (
      <div id="new-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/users">Users</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/users/one-mappers">OneMappers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/users/one-mappers/${userType.value}`}>{userType.label}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>New User</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New User</h3>

          <UserForm
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

export default connect(null, { push })(NewUserScreen);
