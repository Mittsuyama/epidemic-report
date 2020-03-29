import React from 'react';
import {
  Button,
  DatePicker,
  InputItem,
  List,
  Picker,
  WhiteSpace,
  Switch,
} from 'antd-mobile';
// @ts-ignore
import { createForm } from 'rc-form';

const Form = (props: any) => {
  const { getFieldProps, getFieldError, setFieldsValue } = props.form;
  const { submit, data } = props;

  return (
    <div className="form-container">
      <WhiteSpace />
      <List>
        {data.map((item: any, index: number) => {
          if (item.type === 'input') {
            return (
              <InputItem
                labelNumber={7}
                key={item.name}
                placeholder="请填写"
                error={!!getFieldError(item.name)}
                {...getFieldProps(item.name, {
                  rules: [{ required: true, message: `请填写${item.title}` }],
                })}
              >
                {item.title}
              </InputItem>
            );
          } else if (item.type === 'time') {
            return (
              <DatePicker
                key={item.name}
                error={!!getFieldError(item.name)}
                {...getFieldProps(item.name, {
                  initialValue: new Date(),
                  rules: [{ required: true, message: `请选择${item.title}` }],
                })}
              >
                <List.Item arrow="horizontal">{item.title}</List.Item>
              </DatePicker>
            );
          } else if (item.type === 'picker') {
            return (
              <Picker
                key={item.name}
                data={item.option}
                cols={1}
                {...getFieldProps(item.name, {
                  rules: [{ required: true }],
                })}
              >
                <List.Item arrow="horizontal">{item.title}</List.Item>
              </Picker>
            );
          } else if (item.type === 'switch') {
            return (
              <List.Item
                key={item.name}
                extra={
                  <Switch
                    {...getFieldProps(item.name, {
                      initialValue: false,
                      valuePropName: 'checked',
                    })}
                    onClick={(checked: boolean) => {
                      let newState = props.form.getFieldsValue();
                      newState[item.name] = checked;
                      setFieldsValue({
                        ...newState,
                      });
                    }}
                  />
                }
              >
                {item.title}
              </List.Item>
            );
          } else if (item.type === 'text') {
            return (
              <List.Item key={index}>
                <span style={{ color: '#bbb', fontSize: 16 }}>{item.text}</span>
              </List.Item>
            );
          }
        })}
      </List>
      <WhiteSpace />
      <Button onClick={() => submit(props.form)}>提交</Button>
    </div>
  );
};

export default createForm()(Form);
