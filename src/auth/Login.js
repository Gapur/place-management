import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/img/logo.png';

import LoginForm from './components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
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

export default Login;
