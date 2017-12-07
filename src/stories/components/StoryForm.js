import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col, Input } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  renderInput,
  renderSelect,
  renderLabel,
  renderTextarea,
  renderInputUpload,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';
import CustomTags from './CustomTags';

const FormItem = Form.Item;
const users = ['Nuttawuth Chainilphan', 'Gapur Kassym', 'John Terry'];
const places = ['Sidney Oper House', 'Astana Arena', 'Tokya Tower', 'Qaragandy Opera'];

const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class PlaceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      newTag: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
    this.handleUpdateTags = this.handleUpdateTags.bind(this);
  }

  onSubmit(values) {
    this.props.onSubmit({ ...values, tags: this.state.tags });
  }

  handleDeleteTag = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag != removedTag);
    this.setState({ tags });
  }

  handleUpdateTags = () => {
    const { newTag, tags } = this.state;
    const newTags = _.uniq(tags.concat(newTag))
    this.setState({ tags: newTags, newTag: null });
  }

  render() {
    const { handleSubmit, error, submitting } = this.props;
    const { tags, newTag } = this.state;

    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
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

            <FormItem {...tailFormItemLayout}>
              <CustomTags
                tags={tags}
                isCreating={newTag != null}
                onChange={(e) => this.setState({ newTag: e.target.value })}
                onUpdate={this.handleUpdateTags}
                onDelete={this.handleDeleteTag}
                onClick={() => this.setState({ newTag: '' })}
              />
            </FormItem>
          </Col>

          <Col span={8}>
            <Field
              name="story_picture"
              label="Story Picture"
              component={renderInputUpload}
              placeholder="Upload Picture"
              multiple
              listType="picture-card"
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

export default reduxForm({ form: 'placeForm' })(PlaceForm);
