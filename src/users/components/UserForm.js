import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  renderInput,
  renderSelect,
  renderDateTime,
  renderLabel,
  renderTextarea,
  renderInputUpload,
} from '../../shared/utils/form_components';
import { required, email, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;
const options = [
  { value: 'Thailand', label: 'Thailand' },
  { value: 'Qazakhstan', label: 'Qazakhstan' },
  { value: 'Japan', label: 'Japan' },
];
const genders = [
  { value: 1, label: 'male' },
  { value: 2, label: 'female' },
];

class UserForm extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;
    const buttonAfter = <Button type="primary">Generate</Button>

    return (
      <Form onSubmit={handleSubmit}>
        <Row gutter={32}>
          <div className="is-right">
            <FormItem>
              <Button style={{ marginRight: 5 }}>
                <Link to="/users/one-mappers/regulars">Cancel</Link>
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

            <div className="input-button-suffix">
              <Field
                name="password"
                label="Password"
                type="password"
                component={renderInput}
                placeholder="At least 8 Characters"
                validate={[required, password]}
                suffix={buttonAfter}
              />
            </div>

            <Field
              name="gender"
              label="I'am"
              component={renderSelect}
              placeholder="Select Sex"
              options={genders}
            />

            <Field
              name="birthdate"
              label="Birthdate"
              component={renderDateTime}
              placeholder="Birth date"
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
              component={renderSelect}
              placeholder="Select Country"
              options={options}
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

          <Col span={8}>
            <Field
              name="picture"
              label="Profile Picture"
              component={renderInputUpload}
              placeholder="Upload Picture"
              multiple
              listType="picture-card"
            />

            <Field
              name="bio"
              label="BIO"
              component={renderTextarea}
              placeholder="BIO"
            />

            <Field
              name="registration_date"
              label="Registration Date"
              component={renderLabel}
            />

            <Field
              name="created_date"
              label="Create Date"
              component={renderLabel}
            />

            <Field
              name="created_by"
              label="Create by"
              component={renderLabel}
            />
          </Col>
        </Row>
      </Form>
    )
  }
}

export default reduxForm({ form: 'userForm' })(UserForm);
