import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Icon, Row, Col } from 'antd';
import { Field, reduxForm, formValueSelector } from 'redux-form';
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
import { GENDERS, USER_GROUP } from '../../shared/constants/constants';

const FormItem = Form.Item;

class UserForm extends Component {
  render() {
    const { handleSubmit, error, submitting, createdAt, createdBy, registrationDate } = this.props;
    const buttonAfter = <Button type="primary">Generate</Button>

    return (
      <Form onSubmit={handleSubmit}>
        <Row gutter={32}>
          <div className="is-right">
            <FormItem>
              <Button style={{ marginRight: 5 }}>
                <Link to="/users/one-mappers/regulars">Cancel</Link>
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
              name="firstName"
              label="First Name"
              component={renderInput}
              placeholder="First Name"
              validate={required}
            />

            <Field
              name="lastName"
              label="Last Name"
              component={renderInput}
              placeholder="Last Name"
              validate={required}
            />

            <Field
              name="displayName"
              label="Display Name"
              component={renderInput}
              placeholder="Display Name"
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
              name="group"
              label="Role"
              component={renderSelect}
              placeholder="Select Role"
              options={USER_GROUP}
              validate={required}
            />

            <Field
              name="gender"
              label="I'am"
              component={renderSelect}
              placeholder="Select Sex"
              options={GENDERS}
            />

            <Field
              name="birthdate"
              label="Birthdate"
              component={renderDateTime}
              placeholder="Birth date"
            />

            <Field
              name="city"
              label="Living In"
              component={renderInput}
              placeholder="City"
            />

            <Field
              name="country"
              label="Country"
              component={renderInput}
              placeholder="Country"
            />

            <Field
              name="mobile"
              label="Mobile"
              component={renderInput}
              placeholder="Mobile Number"
            />

            <Field
              name="username"
              label="User Name"
              component={renderInput}
              placeholder="@cristian"
              validate={required}
            />
          </Col>

          <Col span={8}>
            <Field
              name="photoURL"
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

            {registrationDate &&
              <Field
                name="registrationDate"
                label="Registration Date"
                component={renderLabel}
              />
            }

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
    )
  }
}

const User = reduxForm({ form: 'userForm' })(UserForm);

const selector = formValueSelector('userForm');

export default connect(
  state => ({
    createdAt: selector(state, 'createdAt'),
    createdBy: selector(state, 'createdBy'),
    registrationDate: selector(state, 'registrationDate'),
  }),
)(User);
