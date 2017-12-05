import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  renderInput,
  renderSelect,
  renderLabel,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';

const FormItem = Form.Item;
const options = ['Thailand', 'Qazakhstan', 'Japan'];

const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class PlaceForm extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row gutter={32}>
          <Col span={8} offset={2}>
            <Field
              name="place_name"
              label="Place Name"
              component={renderInput}
              placeholder="Place Name"
              validate={required}
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
              name="city"
              label="City"
              component={renderInput}
              placeholder="City"
              validate={required}
            />

            <Field
              name="source"
              label="Source"
              component={renderInput}
              placeholder="google"
              validate={required}
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

            <FormItem {...tailFormItemLayout}>
              <Button style={{ marginRight: 5 }}>
                <Link to="/places">Cancel</Link>
              </Button>
              <Button type="primary" htmlType="submit">
                <Icon type="save" />Save
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default reduxForm({ form: 'placeForm' })(PlaceForm);
