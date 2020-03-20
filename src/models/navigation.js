export default {
  namespaces: 'navigation',
  state: '主页',
  reducers: {
    update(state, { payload: navigation }) {
      return navigation;
    },
  },
};
