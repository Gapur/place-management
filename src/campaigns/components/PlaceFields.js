import React from 'react';
import { Field } from 'redux-form';
import moment from 'moment';
import { Form, Button, Icon, Row, Col, Input } from 'antd';
import { renderInput, renderSelect } from '../../shared/utils/form_components';
import { required } from '../../shared/utils/form_validations';

const FormItem = Form.Item;
const events = [
  { value: 'Heart', label: 'Heart' },
  { value: 'Check_In', label: 'Check-in' },
  { value: 'Up_Heart', label: 'Up-Heart' },
];

const PlaceFields = ({ fields, label }) => {
  if (fields.length == 0) fields.push({});
  const lastIdx = fields.length - 1;

  return (
    <div className="place-fields">
      {fields.map((place, index, fields) => {
        return (
          <Row key={place} gutter={8}>
            <Col span={6}>
              <Field
                name={`${place}.place`}
                component={renderInput}
                label="Place(s)"
                placeholder="Place(s)"
                validate={index == lastIdx ? null : required}
              />
            </Col>

            <Col span={6}>
              <Field
                name={`${place}.event`}
                label="Event"
                component={renderSelect}
                options={events}
                placeholder="Select Event"
                validate={index == lastIdx ? null : required}
              />
            </Col>

            <Col span={8}>
              <Field
                name={`${place}.distance`}
                label="Distance(m)"
                component={renderInput}
                placeholder="Distance"
                validate={index == lastIdx ? null : required}
              />
            </Col>

            {index != lastIdx && (
              <Col span={2}>
                <Button onClick={() => fields.remove(index)}>
                  <Icon type="delete" />
                </Button>
              </Col>
            )}
          </Row>);
      })}

      <Row>
        <div className="is-right">
          <FormItem>
            <Button style={{ marginRight: 5 }} onClick={() => fields.push({})}>
              <Icon type="plus" />
            </Button>
            {fields.length > 0 &&
              <Button onClick={() => fields.removeAll()}>Clear all</Button>
            }
          </FormItem>
        </div>
      </Row>
    </div>
  );
}

export default PlaceFields;
