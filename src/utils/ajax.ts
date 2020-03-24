import axios from 'axios';
import { Toast } from 'antd-mobile';

const apiRoot = '/';

export default (method = 'GET', path = '', params = {}) => {
  const url = apiRoot + path;
  return new Promise((resolve, _) => {
    let promise;

    if (method === 'GET') {
      promise = axios.get(url, { params: { ...params } });
    } else {
      promise = axios.put(url, params);
    }
    promise
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        Toast.info('Error Message: ' + error);
      });
  });
};
