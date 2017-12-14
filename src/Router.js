import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from './shared/components/MainLayout';
import LoginScreen from './auth/Login';
import NotFoundScreen from './shared/components/NotFoundScreen';

const RouterComponent = () => (
  <Switch>
    <Route exact path='/login' component={LoginScreen} />
    <Route path="/" component={MainLayout} />
    <Route path="/" component={NotFoundScreen} />
  </Switch>
);

export default RouterComponent;
