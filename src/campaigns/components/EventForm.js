import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col, Input } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  renderInput,
  renderTextarea,
  renderRangePicker,
  renderSwitch,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';
import CustomTags from '../../stories/components/CustomTags';

const FormItem = Form.Item;

class EventForm extends Component {
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
    this.props.onSubmit({ ...values, available_in_cities: this.state.tags });
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
      <Form layout="vertical" onSubmit={handleSubmit(this.onSubmit)}>
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
                <label>Event Name</label>
              </Col>
              <Col span={10}>
                <Field
                  name="event_name"
                  component={renderInput}
                  placeholder="Event Name"
                  validate={required}
                />
              </Col>
              <Col span={6} className="custom-switch">
                <Field
                  name="is_event_name"
                  label="Active"
                  component={renderSwitch}
                />
              </Col>
            </Row>

            <Row>
              <Col span={8} className="ant-form-item-label">
                <label>Available in Cities</label>
              </Col>

              <Col span={16}>
                <FormItem>
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
            </Row>

            <Field
              name="description"
              label="Event Description"
              component={renderTextarea}
              placeholder="Event Description"
            />

            <Field
              name="from_date_to_date"
              label="From Date To Date"
              component={renderRangePicker}
              validate={required}
            />

            <Row>
              <Col span={8} className="ant-form-item-label">
                <label>Push Notification</label>
              </Col>
              <Col span={10}>
                <Field
                  name="push_notification"
                  component={renderInput}
                />
              </Col>
              <Col span={6} className="custom-switch">
                <Field
                  name="is_push_notifiaction"
                  label="Active"
                  component={renderSwitch}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default reduxForm({ form: 'eventForm' })(EventForm);
