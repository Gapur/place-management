import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Icon, Row, Col } from 'antd';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {
  renderInput,
  renderSelect,
  renderLabel,
  renderTextarea,
  renderInputUpload,
  renderPlacesAutocomplete,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';
import { PLACE_SOURCE } from '../../shared/constants/constants';

const FormItem = Form.Item;

const PlaceMap = compose(
  withGoogleMap,
)(({ input: { onChange, value }, isMarkerShown, coordinate }) => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: -34.397, lng: 150.6449 }}
  >
    {isMarkerShown &&
      <Marker position={{ lat: coordinate.lat || -34, lng: coordinate.long || 150 }} />}
  </GoogleMap>
));

class PlaceForm extends Component {
  render() {
    const { handleSubmit, error, submitting, createdAt, createdBy, lat, long } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <div className="is-right">
            <FormItem>
              <Button style={{ marginRight: 5 }}>
                <Link to="/places">Cancel</Link>
              </Button>
              <Button disabled={submitting} type="primary" htmlType="submit">
                <Icon type="save" />Save
              </Button>
            </FormItem>
          </div>
        </Row>

        {error && <Row><FormItem><p className="is-danger">{error}</p></FormItem></Row>}

        <Row gutter={32}>
          <Col span={8}>
            <Field
              name="placeName"
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
            />

            <Field
              name="address"
              label="Address"
              component={renderInput}
              placeholder="Address Number"
              validate={required}
            />

            <Field
              name="addressStreet"
              label="Street"
              component={renderInput}
              placeholder="Street / Route"
            />

            <Field
              name="addressAreaDistrict"
              label="Arrea / District"
              component={renderInput}
              placeholder="City Arrea / District"
            />

            <Field
              name="addressCityTown"
              label="City / Town"
              component={renderInput}
              placeholder="City / Town"
            />

            <Field
              name="addressStateProvince"
              label="State / Province"
              component={renderInput}
              placeholder="State / Province"
            />

            <Field
              name="addressCountry"
              label="Country"
              component={renderInput}
              placeholder="Country"
            />

            <Field
              name="addressPostalCode"
              label="Postal Code"
              component={renderInput}
              placeholder="@12x3jk9"
            />
          </Col>

          <Col span={8}>
            <Row>
              <Col span={8} className="ant-form-item-label">
                <label>Location</label>
              </Col>
              <Col span={8}>
                <Field
                  name="locationLat"
                  component={renderInput}
                  placeholder="lat"
                  validate={required}
                />
              </Col>
              <Col span={8}>
                <Field
                  name="locationLong"
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
                coordinate={{ lat: +lat, long: +long }}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </FormItem>

            <Field
              name="sourceId"
              label="Source"
              component={renderPlacesAutocomplete}
              placeholder="Google Place"
            />

            <Field
              name="source"
              label="Place Source"
              component={renderSelect}
              placeholder="Select Source"
              options={PLACE_SOURCE}
            />
          </Col>

          <Col span={8}>
            <Field
              name="pictureURL"
              label="Profile Picture"
              component={renderInputUpload}
              placeholder="Upload Picture"
              multiple
              listType="picture-card"
            />

            {createdAt &&
              <Field
                name="createdAt"
                label="Create Date"
                component={renderLabel}
              />
            }

            {createdBy &&
              <Field
                name="createdBy"
                label="Create by"
                component={renderLabel}
              />
            }
          </Col>
        </Row>
      </Form>
    );
  }
}

const Place = reduxForm({ form: 'placeForm' })(PlaceForm);

const selector = formValueSelector('placeForm');

export default connect(
  state => ({
    createdAt: selector(state, 'createdAt'),
    createdBy: selector(state, 'createBy'),
    lat: selector(state, 'locationLat'),
    long: selector(state, 'locationLong'),
  }),
)(Place);
