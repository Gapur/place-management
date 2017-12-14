import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Logo from '../shared/img/logo.png';

import LoginForm from './components/LoginForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    return this.props.authenticateUserMutation({ variables: { ...values } })
      .catch(parseFormErrors);
  }

  render() {
    return (
      <div id="login">
        <div className="login-wrapper">
          <img className="login-logo" alt="OneMap" src={Logo} />
          <LoginForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthenticateUserMutation ($email: String!, $password: String!) { 
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

const LoginScreen = compose(
  graphql(AUTHENTICATE_USER_MUTATION, {
    name: 'authenticateUserMutation',
  }),
  graphql(LOGGED_IN_USER_QUERY, {
    name: 'loggedInUserQuery',
    options: { fetchPolicy: 'network-only' }
  })
)(Login);

export default LoginScreen;
