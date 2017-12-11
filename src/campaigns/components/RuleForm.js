import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col, Input } from 'antd';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  renderInput,
  renderSelect,
  renderSwitch,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';
import PlaceFields from './PlaceFields';

const FormItem = Form.Item;
const notifications = [
  { value: 'No', label: 'No' },
  { value: 'Near_by', label: 'Near by' },
  { value: 'Away_from', label: 'Away from' }
];

class RuleForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.onSubmit({ ...values });
  }

  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Row>
          <div className="is-right">
            <FormItem>
              <Button style={{ marginRight: 5 }}>
                <Link to="/campaigns">Cancel</Link>
              </Button>
              <Button type="primary" htmlType="submit">
                <Icon type="save" />Save
              </Button>
            </FormItem>
          </div>
        </Row>
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
                  name="is_rule"
                  label="Active"
                  component={renderSwitch}
                />
              </Col>
            </Row>

            <Field
              name="point"
              label="Point"
              component={renderInput}
              placeholder="1000"
            />

            <Field
              name="badge"
              label="Badge"
              component={renderInput}
            />

            <Field
              name="notification"
              label="Notification"
              component={renderSelect}
              options={notifications}
            />

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
        </Row>
      </Form>
    )
  }
}

export default reduxForm({ form: 'ruleForm' })(RuleForm);
