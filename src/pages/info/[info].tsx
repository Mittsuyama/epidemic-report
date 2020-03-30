import React from 'react';
import INFO from '@/utils/constant/info';
// @ts-ignore
import Form from '@/components/form';
import { queryPersonalInformationUpdate, queryPersonalReport, queryRoomReport} from '@/utils/api';

let pageName = '';

export default (props: any) => {
  const { match } = props;
  pageName = match.params.info;
  // @ts-ignore
  const formList = INFO[pageName] || [];

  return (
    <div className="info-container">
      <Form data={formList} submit={submit}/>
    </div>
  );
};

const submit = (form: any) => {
  form.validateFields(async(error: any) => {
    if(error) {
      console.log(error);
    } else {
      const data = form.getFieldsValue();
      const updateFunction: Function = getUpdateFunction();
      await updateFunction();
    }
  })
};

const getUpdateFunction = () => {
  let report: Function;
  switch (pageName) {
    case 'info':
      report = queryPersonalInformationUpdate;
      break;
    case 'personal':
      report = queryPersonalReport;
      break;
    case 'room':
      report = queryRoomReport;
      break;
    default:
      report = () => 0;
  }
  return report;
};

