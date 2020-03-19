import React from 'react';
import './index.less';
import { history } from 'umi';

export default () => {
  history.push('/home');
  return <div>{''}</div>;
};
