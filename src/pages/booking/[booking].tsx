import React from 'react';
import LIST from '@/utils/booking';
import { List, InputItem, DatePicker, Picker, WhiteSpace, Button } from 'antd-mobile';
// @ts-ignore
import { createForm } from 'rc-form';

const Booking = (props: any) => {
  const { match } = props;
  // @ts-ignore
  const formList = LIST[match.params.booking] || [];

  return (
    <div className="booking-container">
      <WhiteSpace />
      {formRender(formList, props.form)}
      <WhiteSpace />
      <Button onClick={() => submit(props.form)}>提交</Button>
    </div>
  );
};

const submit = (form: any) => {
  form.validateFields((error: any) => {
    if(error) {
      console.log(error);
    } else {
      console.log(form.getFieldsValue());
    }
  })
};

const formRender = (list: any, form: any) => {
  const { getFieldProps, getFieldError  } = form;

  return (
    <List>
      {list.map((item: any) => {
        if(item.type === 'input') {
          return (
            <InputItem
              placeholder="请填写"
              error={!!getFieldError(item.name)}
              {...getFieldProps(item.name, {
                rules: [
                  { required: true, message: `请填写${item.title}` }
                ],
              })}
              key={item.name}>{item.title}</InputItem>
          );
        } else if(item.type === 'time') {
          return (
            <DatePicker
              key={item.name}
              error={!!getFieldError(item.name)}
              {...getFieldProps(item.name, {
                initialValue: new Date(),
                rules: [
                  { required: true, message: `请选择${item.title}` }
                ],
              })
              }
            >
              <List.Item arrow="horizontal">{item.title}</List.Item>
            </DatePicker>
          );
        } else if(item.type === 'picker') {
          return (
            <Picker
              key={item.name}
              data={item.option}
              cols={1}
              {...getFieldProps(item.name, {
                rules: [
                  { required: true },
                ],
              })}
              >
              <List.Item arrow="horizontal">{item.title}</List.Item>
            </Picker>
          );
        }
      })}
    </List>
  );
};

export default createForm()(Booking);
