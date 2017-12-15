import React, { Component } from 'react';
import { Form, Button, Row, Col, Input, Alert } from 'antd';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  renderInput,
  renderSelect,
  renderSwitch,
  renderInputUpload,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';
import PlaceFields from './PlaceFields';

const FormItem = Form.Item;

class ConditionPlaceForm extends Component {

  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <div className="is-right">
            <FormItem>
              <Button style={{ marginRight: 5 }}>
                <Link to="/campaigns">Cancel</Link>
              </Button>
              <Button loading={submitting} type="primary" htmlType="submit">Save</Button>
            </FormItem>
          </div>
        </Row>

        {error && <Row><FormItem><Alert message={error} type="error" closable /></FormItem></Row>}

        <Row gutter={32}>
          <Col span={12}>
            <Row>
              <Col span={8} className="ant-form-item-label">
                <label>Rule #</label>
              </Col>
              <Col span={10}>
                <Field
                  name="rule"
                  component={renderInput}
                  placeholder="#RO1234"
                  validate={required}
                />
              </Col>
              <Col span={6} className="custom-switch">
                <Field
                  name="active"
                  label="Active"
                  component={renderSwitch}
                />
              </Col>
            </Row>

            <Field
              name="pointReward"
              label="Point"
              component={renderInput}
              placeholder="1000"
            />

            <Field
              name="badgeReward"
              label="Badge"
              component={renderInputUpload}
              placeholder="Image"
              listType="picture-card"
            />

            {/* <Field
              name="notification"
              label="Notification"
              component={renderSelect}
              placeholder="Select Notification"
              options={notifications}
            /> */}

            <Field
              name="distance"
              label="Distance (m)"
              component={renderInput}
              placeholder="3000"
            />
          </Col>

          <Col span={18}>
            <FieldArray
              name="places"
              component={PlaceFields}
            />
          </Col>

          <Col span={18}>
            <FieldArray
              name="dates"
              component={PlaceFields}
            />
          </Col>
        </Row>
      </Form>
    )
  }
}

export default reduxForm({ form: 'ConditionPlaceForm' })(ConditionPlaceForm);
