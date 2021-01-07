import React from 'react';
import BOOKING from '@/utils/constant/booking';
import {
  queryCanteenBooking,
  queryClassroomBooking,
  queryExpressBooking,
  querySupermarketBooking,
} from '@/utils/api';
// @ts-ignore
import Form from '@/components/form';

export default (props: any) => {
  const { match } = props;
  // @ts-ignore
  const formList = BOOKING[match.params.booking] || [];

  const submit = (form: any) => {
    form.validateFields(async (error: any) => {
      if(error) {
        console.log(error);
      } else {
        const data = form.getFieldsValue();
        let result: any;
        switch (match.params.booking) {
          case 'canteen':
            result = await queryCanteenBooking(data);
            break;
          case 'classroom':
            result = await queryClassroomBooking(data);
            break;
          case 'express':
            result = await queryExpressBooking(data);
            break;
          default:
            result = await querySupermarketBooking(data);
        }
      }
    })
  };

  return (
    <div className="info-container">
      <Form data={formList} submit={submit}/>
    </div>
  );
};

