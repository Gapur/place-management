import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col, Tag, Input } from 'antd';
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
      inputVisible: false,
      inputValue: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.handleShowInput = this.handleShowInput.bind(this);
    this.handleInputConfirm = this.handleInputConfirm.bind(this);
  }

  onSubmit(values) {
    this.props.onSubmit({ ...values, tags: this.state.tags });
  }

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  }

  renderTags() {
    return (
      this.state.tags.map((tag, index) =>
        <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
          {tag}
        </Tag>
      )
    );
  }

  handleShowInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  render() {
    const { handleSubmit, error, submitting } = this.props;

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
              <div className="tag-wrapper">
                {this.renderTags()}
                {this.state.inputVisible && (
                  <Input
                    ref={input => this.input = input}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={this.state.inputValue}
                    onChange={(e) => this.setState({ inputValue: e.target.value })}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                  />
                )}
                {!this.state.inputVisible && (
                  <Tag
                    onClick={this.handleShowInput}
                    style={{ background: '#fff', borderStyle: 'dashed' }}
                  >
                    <Icon type="plus" /> New Tag
                  </Tag>
                )}
              </div>
            </FormItem>
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
