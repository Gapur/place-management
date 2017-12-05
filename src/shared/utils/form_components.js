import React from 'react';
import { Form, Input, Select, Row, Col, Checkbox } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

export function getValidationState({ error, warning, touched }) {
  if (touched && error) return "error";
  if (touched && warning) return "warning";
  return 'success';
}

export const renderInput = (props) => {
  const { input, label, meta, ...custom } = props;
  const id = `${meta.form}_${input.name}`;
  const inputProps = { ...props, ...input, id: id };
  const validateStatus = getValidationState(meta);

  return (
    <FormItem
      {...formItemLayout}
      label={label ? label : ''}
      validateStatus={validateStatus}
      help={meta.touched && meta.error && meta.error || ''}
    >
      <Input {...inputProps} />
    </FormItem >
  );
};
