import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, email, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;

class PlaceForm extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={8}>
            <Field
              name="first_name"
              label="First Name"
              component={renderInput}
              placeholder="First Name"
              validate={required}
            />
            <Field
              name="last_name"
              label="Last Name"
              component={renderInput}
              placeholder="Last Name"
              validate={required}
            />
            <Field
              name="email"
              label="Email"
              component={renderInput}
              placeholder="email"
              validate={[required, email]}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              component={renderInput}
              placeholder="At least 8 Characters"
              validate={[required, password]}
            />
            <Field
              name="living_in"
              label="Living In"
              component={renderInput}
              placeholder="City"
            />
            <Field
              name="country"
              label="Country"
              component={renderInput}
              placeholder="Select Country"
            />
            <Field
              name="phone"
              label="Mobile"
              component={renderInput}
              placeholder="Mobile Number"
            />
            <Field
              name="user_name"
              label="User Name"
              component={renderInput}
              placeholder="@cristian"
              validate={required}
            />
          </Col>
        </Row>

        <FormItem>
          <Button type="primary" htmlType="submit">
            <Icon type="save" />Save
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default reduxForm({ form: 'placeForm' })(PlaceForm);
