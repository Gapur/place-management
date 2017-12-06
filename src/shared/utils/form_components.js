import React from 'react';
import { Form, Input, Select, Checkbox, DatePicker, Upload, Icon } from 'antd';
import PlacesAutocomplete from 'react-places-autocomplete';

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
  const { input, label, meta, placeholder } = props;
  const id = `${meta.form}_${input.name}`;
  const inputProps = { ...input, id: id, placeholder };
  const validateStatus = getValidationState(meta);

  return (
    <FormItem
      {...formItemLayout}
      label={label ? label : ''}
      validateStatus={validateStatus}
      help={meta.touched && meta.error && meta.error || ''}
    >
      <Input {...inputProps} />
    </FormItem>
  );
};

export const renderSelect = (props) => {
  const { input, label, meta, options, placeholder } = props;
  const id = `${meta.form}_${input.name}`;
  const onChange = (value) => input.onChange(value);
  const onBlur = () => input.onBlur(inputProps.value);
  const inputProps = { id: id, name: input.name, onChange, onBlur, placeholder };
  const validateStatus = getValidationState(meta);

  return (
    <FormItem
      {...formItemLayout}
      label={label ? label : ''}
      validateStatus={validateStatus}
      help={meta.touched && meta.error && meta.error || ''}
    >
      <Select {...inputProps}>
        {options.map(opt => <Option key={opt} value={opt}>{opt}</Option>)}
      </Select>
    </FormItem>
  );
};

export const renderDateTime = (props) => {
  const { input, label, meta } = props;
  const id = `${meta.form}_${input.name}`;
  const onChange = (date, dateString) => input.onChange(dateString);
  const inputProps = { name: input.name, onChange, id: id };
  const validateStatus = getValidationState(meta);

  return (
    <FormItem
      {...formItemLayout}
      label={label ? label : ''}
      validateStatus={validateStatus}
      help={meta.touched && meta.error && meta.error || ''}
    >
      <DatePicker {...inputProps} />
    </FormItem>
  );
};

export const renderLabel = (props) => {
  const { input, label, meta } = props;
  const id = `${meta.form}_${input.name}`;
  const inputProps = { ...input, id: id };

  return (
    <FormItem {...formItemLayout} label={label ? label : ''}>
      <span {...inputProps}>{input.value}</span>
    </FormItem>
  );
};

export const renderTextarea = (props) => {
  const { input, label, meta, placeholder } = props;
  const id = `${meta.form}_${input.name}`;
  const inputProps = { ...input, id: id, placeholder };
  const validateStatus = getValidationState(meta);

  return (
    <FormItem
      {...formItemLayout}
      label={label ? label : ''}
      validateStatus={validateStatus}
      help={meta.touched && meta.error && meta.error || ''}
    >
      <textarea className="ant-input" style={{ width: '100%' }} {...inputProps} />
    </FormItem>
  );
};

export const renderInputUpload = (props) => {
  const { input, label, meta, ...custom } = props;
  const id = `${meta.form}_${input.name}`;
  const inputProps = { ...input, id: id, ...custom };
  const validateStatus = getValidationState(meta);
  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <FormItem
      {...formItemLayout}
      label={label ? label : ''}
      validateStatus={validateStatus}
      help={meta.touched && meta.error && meta.error || ''}
    >
      <Upload {...inputProps}>
        {input.value ? <img src={input.value.file} alt="image" /> : uploadButton}
      </Upload>
    </FormItem>
  );
};

export const renderPlacesAutocomplete = (props) => {
  const { input, label, meta, placeholder } = props;
  const id = `${meta.form}_${input.name}`;
  const inputProps = { ...input, id: id, placeholder };
  const validateStatus = getValidationState(meta);

  return (
    <FormItem
      {...formItemLayout}
      label={label ? label : ''}
      validateStatus={validateStatus}
      help={meta.touched && meta.error && meta.error || ''}
    >
      <PlacesAutocomplete
        inputProps={inputProps}
        classNames={{
          input: "ant-input",
        }}
        styles={{
          autocompleteContainer: {
            zIndex: 2,
          }
        }}
      />
    </FormItem>
  );
};
