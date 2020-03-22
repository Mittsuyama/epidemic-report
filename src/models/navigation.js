export default {
  namespaces: 'navigation',
  state: {
    title: '主页',
    back: false,
    last: '',
  },
  reducers: {
    update(state, { payload: navigation }) {
      return navigation;
    },
  },
};
