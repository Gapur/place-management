import React, { Component } from 'react';
import { Form, Button, Icon, Row, Col, Input } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  renderInput,
  renderSelect,
  renderTextarea,
  renderSwitch,
  renderInputUpload,
} from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';
import CustomTags from '../../stories/components/CustomTags';

const FormItem = Form.Item;

class CampaignForm extends Component {
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
    return this.props.onSubmit({ ...values, availableCities: this.state.tags });
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
    const { handleSubmit, error, submitting, places, users } = this.props;
    const { tags, newTag } = this.state;
    const placeOptions = places.map(({ id, placeName }) => ({ value: id, label: placeName }));
    const usersOptions = users.map(({ id, displayName }) => ({ value: id, label: displayName }));

    return (
      <Form layout="vertical" onSubmit={handleSubmit(this.onSubmit)}>
        <Row>
          <div className="is-right">
            <FormItem>
              <Button style={{ marginRight: 5 }}>
                <Link to="/campaigns">Cancel</Link>
              </Button>
              <Button disabled={submitting} type="primary" htmlType="submit">
                <Icon type="save" />Save
              </Button>
            </FormItem>
          </div>
        </Row>

        {error && <Row><FormItem><p className="is-danger">{error}</p></FormItem></Row>}

        <Row gutter={32}>
          <Col span={12}>
            <Row>
              <Col span={8} className="ant-form-item-label">
                <label>Campaign Name</label>
              </Col>
              <Col span={10}>
                <Field
                  name="name"
                  component={renderInput}
                  placeholder="Campaign Name"
                  validate={required}
                />
              </Col>
              <Col span={6} className="custom-switch">
                <Field
                  name="active"
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
              label="Campaign Description"
              component={renderTextarea}
              placeholder="Campaign Description"
            />

            <Field
              name="partnerId"
              label="Partner Account"
              component={renderSelect}
              placeholder="Select Partner"
              options={usersOptions}
            />

            <Row>
              <Col span={8} className="ant-form-item-label">
                <label>Push Notification</label>
              </Col>
              <Col span={10}>
                <Field
                  name="pushNotificationMsg"
                  component={renderInput}
                  placeholder="Message"
                />
              </Col>
              <Col span={6} className="custom-switch">
                <Field
                  name="pushNotificationActive"
                  label="Active"
                  component={renderSwitch}
                />
              </Col>
            </Row>

            <Row>
              <Col span={8} className="ant-form-item-label">
                <label>Feed Notification</label>
              </Col>
              <Col span={10}>
                <Field
                  name="feedNotificationMsg"
                  component={renderInput}
                  placeholder="Message"
                />
              </Col>
              <Col span={6} className="custom-switch">
                <Field
                  name="feedNotificationActive"
                  label="Active"
                  component={renderSwitch}
                />
              </Col>
            </Row>

            <Field
              name="feedNotificationImg"
              label="Feed Notification Image"
              component={renderInputUpload}
              placeholder="Image"
              listType="picture-card"
            />

            <Field
              name="defaultPlaceId"
              label="Place Name"
              component={renderSelect}
              placeholder="Place Name"
              options={placeOptions}
            />

            <Field
              name="photoUrl"
              label="Photo"
              component={renderInputUpload}
              placeholder="Photo"
              listType="picture-card"
            />
          </Col>
        </Row>
      </Form>
    )
  }
}

export default reduxForm({ form: 'campaignForm' })(CampaignForm);
