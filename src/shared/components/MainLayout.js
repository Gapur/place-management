import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './Sidebar';
import Header from './Header';
import PlacesScreen from '../../places';
import NewPlaceScreen from '../../places/NewPlace';
import EditPlaceScreen from '../../places/EditPlace';
import UsersScreen from '../../users';
import NewUserScreen from '../../users/NewUser';
import EditUserScreen from '../../users/EditUser';
import StoriesScreen from '../../stories';
import NewStoryScreen from '../../stories/NewStory';
import EditStoryScreen from '../../stories/EditStory';

const { Content } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '24px 16px 0' }}>
            <Route exact path="/dashboard" component={UsersScreen} />
            <Route exact path="/users/one-mappers/regulars" component={UsersScreen} />
            <Route exact path="/users/one-mappers/bloggers" component={UsersScreen} />
            <Route exact path="/users/one-mappers/partners" component={UsersScreen} />
            <Route exact path="/users/one-mappers/new" component={NewUserScreen} />
            <Route exact path="/users/one-mappers/edit/:id" component={EditUserScreen} />
            <Route exact path="/places" component={PlacesScreen} />
            <Route exact path="/places/new" component={NewPlaceScreen} />
            <Route exact path="/places/edit/:id" component={EditPlaceScreen} />
            <Route exact path="/stories" component={StoriesScreen} />
            <Route exact path="/stories/new" component={NewStoryScreen} />
            <Route exact path="/stories/edit/:id" component={EditStoryScreen} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
