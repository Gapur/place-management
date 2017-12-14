import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;

class LoginForm extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form layout="vertical" className="login-form" onSubmit={handleSubmit}>

        {error && <FormItem><p className="is-danger">{error}</p></FormItem>}

        <Field
          name="login"
          label="User Name"
          component={renderInput}
          placeholder="Login"
          validate={required}
        />

        <Field
          name="password"
          label="Password"
          component={renderInput}
          placeholder="Password"
          type="password"
          validate={[required, password]}
        />

        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default reduxForm({ form: 'LoginForm' })(LoginForm);
