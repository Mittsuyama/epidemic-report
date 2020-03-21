import axios from 'axios';

export default (method = 'GET', url = '', params = {}) => {
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      axios
        .get(url, {
          params: { ...params },
        })
        .then(() => {});
    } else {
    }
  });
};
