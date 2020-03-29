import React from 'react';
import BOOKING from '@/utils/constant/booking';
// @ts-ignore
import Form from '@/components/form';

export default (props: any) => {
  const { match } = props;
  // @ts-ignore
  const formList = BOOKING[match.params.booking] || [];

  return (
    <div className="info-container">
      <Form data={formList} submit={submit}/>
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
