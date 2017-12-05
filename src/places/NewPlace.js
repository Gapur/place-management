import React, { Component } from 'react';
import { Breadcrumb, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
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
    return (
      <div id="new-place">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/places">Places</Link></Breadcrumb.Item>
          <Breadcrumb.Item>New Place</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>New Place</h3>

          <PlaceForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default NewPlace;
