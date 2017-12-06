import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {
  renderInput,
  renderSelect,
  renderLabel,
  renderTextarea,
  renderInputUpload,
  renderPlacesAutocomplete,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';

const FormItem = Form.Item;
const options = ['Thailand', 'Qazakhstan', 'Japan'];

const PlaceMap = compose(
  withScriptjs,
  withGoogleMap,
)(({ input: { onChange, value }, isMarkerShown }) => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: -34.397, lng: 150.6449 }}
  >
    {isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));

class PlaceForm extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <div className="is-right">
            <FormItem>
              <Button style={{ marginRight: 5 }}>
                <Link to="/places">Cancel</Link>
              </Button>
              <Button type="primary" htmlType="submit">
                <Icon type="save" />Save
              </Button>
            </FormItem>
          </div>
        </Row>
        <Row gutter={32}>
          <Col span={8}>
            <Field
              name="place_name"
              label="Place Name"
              component={renderInput}
              placeholder="Place Name"
              validate={required}
            />

            <Field
              name="description"
              label="Description"
              component={renderTextarea}
              placeholder="Description"
              validate={required}
            />

            <Field
              name="address"
              label="Address"
              component={renderInput}
              placeholder="Address Number"
              validate={required}
            />

            <Field
              name="street"
              label="Street"
              component={renderInput}
              placeholder="Street / Route"
            />

            <Field
              name="arrea_or_district"
              label="Arrea / District"
              component={renderInput}
              placeholder="City Arrea / District"
            />

            <Field
              name="city_town"
              label="City / Town"
              component={renderInput}
              placeholder="City / Town"
            />

            <Field
              name="state"
              label="State / Province"
              component={renderInput}
              placeholder="State / Province"
            />

            <Field
              name="country"
              label="Country"
              component={renderSelect}
              placeholder="Select Country"
              options={options}
              validate={required}
            />

            <Field
              name="placeId"
              label="Place ID"
              component={renderInput}
              placeholder="@12x3jk9"
              validate={required}
            />
          </Col>

          <Col span={8}>
            <Row>
              <Col span={8}>
                <span>Location:</span>
              </Col>
              <Col span={8}>
                <Field
                  name="lat"
                  component={renderInput}
                  placeholder="lat"
                  validate={required}
                />
              </Col>
              <Col span={8}>
                <Field
                  name="long"
                  component={renderInput}
                  placeholder="long"
                  validate={required}
                />
              </Col>
            </Row>

            <FormItem>
              <Field
                name="place_loc"
                component={PlaceMap}
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </FormItem>

            <Field
              name="source"
              label="Source"
              component={renderPlacesAutocomplete}
              placeholder="Google Place"
            />
          </Col>

          <Col span={8}>
            <Field
              name="profile_picture"
              label="Profile Picture"
              component={renderInputUpload}
              placeholder="Upload Picture"
              multiple
              listType="picture-card"
            />

            <Field
              name="create_date"
              label="Create Date"
              component={renderLabel}
            />

            <Field
              name="create_by"
              label="Create by"
              component={renderLabel}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default reduxForm({ form: 'placeForm' })(PlaceForm);
