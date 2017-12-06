import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  renderInput,
  renderSelect,
  renderLabel,
  renderTextarea,
  renderInputUpload,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';

const FormItem = Form.Item;
const users = ['Nuttawuth Chainilphan', 'Gapur Kassym', 'John Terry'];
const places = ['Sidney Oper House', 'Astana Arena', 'Tokya Tower', 'Qaragandy Opera'];

class PlaceForm extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <div className="is-right">
            <FormItem>
              <Button style={{ marginRight: 5 }}>
                <Link to="/stories">Cancel</Link>
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
              name="user_name"
              label="User Name"
              component={renderSelect}
              placeholder="User Name"
              options={users}
              validate={required}
            />

            <Field
              name="place_name"
              label="Place Name"
              component={renderSelect}
              placeholder="Place Name"
              options={places}
              validate={required}
            />

            <Field
              name="story_title"
              label="Story Title"
              component={renderInput}
              placeholder="Story Title"
              validate={required}
            />

            <Field
              name="story"
              label="Story"
              component={renderTextarea}
              placeholder="User Place Story"
            />

            <Field
              name="keywords"
              label="Keywords"
              component={renderInput}
            />
          </Col>

          <Col span={8}>
            <Field
              name="profile_picture"
              label="Profile Picture"
              component={renderInputUpload}
              placeholder="Upload Picture"
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
    )
  }
}

export default reduxForm({ form: 'placeForm' })(PlaceForm);
