import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  renderInput,
  renderSelect,
  renderLabel,
} from '../../shared/utils/form_components';
import { required, email, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;
const statuses = ['Verified', 'Review'];
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
          <Col span={8}>
            <Field
              name="place_name"
              label="Place Name"
              component={renderInput}
              placeholder="Place Name"
              validate={required}
            />

            <Field
              name="status"
              label="Status"
              component={renderSelect}
              placeholder="Last Name"
              validate={required}
              options={statuses}
            />

            <Field
              name="display_name"
              label="Display Name"
              component={renderInput}
              placeholder="display name"
              validate={required}
            />

            <Field
              name="create_by"
              label="Create by"
              component={renderLabel}
            />

            <FormItem {...tailFormItemLayout}>
              <Button style={{ marginRight: 5 }}>
                <Link to="/stories">Cancel</Link>
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
