import React, { useState, useEffect } from 'react';
import LIST from '@/utils/booking';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';

export default (props: any) => {
  const { match } = props;
  // @ts-ignore
  const formList = LIST[match.params.function] || [];

  return (
    <div className="booking-container">
      <WhiteSpace />
      {formRender(formList, props.form)}
      <WhiteSpace />
      <Button>提交</Button>
    </div>
  );
};

const formRender = (list: any, form: any) => {
  return (
    <List>
      {list.map((item: any) => {
        if(item.type === 'input') {
          return (
            <InputItem key={item.name}>{item.title}</InputItem>
          )
        }
      })}
    </List>
  );
};

