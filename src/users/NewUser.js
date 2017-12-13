import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import moment from 'moment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import UserForm from './components/UserForm';
import { USER_TYPES } from '../shared/constants/constants';
import { parseFormErrors } from '../shared/utils/form_errors';

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { match: { params }, createUser, push } = this.props;
    const userType = USER_TYPES.find(type => type.value == params.type);
    return createUser({ variables: { ...values } })
      .then(() => push(`/users/one-mappers/${userType.value}`))
      .catch(parseFormErrors);
  }

  render() {
    const { match: { params } } = this.props;
    const userType = USER_TYPES.find(type => type.value == params.type);
    const initialValues = {
      registrationDate: moment().format('L'),
      onlineStatus: 'OFFLINE',
      accountStatus: 'ENABLE',
      firstName: "Nurlan",
      lastName: 'Test',
      email: 'test@mail.ru',
      password: 'asdasdasd',
      mobile: '7753639611',
      username: 'cris',
      bio: 'test',
      city: 'Qaragandy',
      country: 'Kazakhstan',
    };

    return (
      <div id="new-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/users">Users</Link></Breadcrumb.Item>
          <Breadcrumb.Item>OneMappers</Breadcrumb.Item>
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
      $email: String,
      $password: String,
      $gender: Gender,
      $birthdate: String,
      $country: String,
      $city: String,
      $mobile: String,
      $username: String,
      $photoURL: String,
      $bio: String,
      $registrationDate: String
      $lastSeen: DateTime
      $onlineStatus: OnlineStatus!
      $accountStatus: Enabled!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      gender: $gender
      birthdate: $birthdate
      country: $country
      city: $city
      mobile: $mobile
      username: $username
      photoURL: $photoURL
      bio: $bio
      registrationDate: $registrationDate
      lastSeen: $lastSeen
      onlineStatus: $onlineStatus
      accountStatus: $accountStatus
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
