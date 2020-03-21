export default {
  namespaces: 'unread',
  state: 0,
  reducers: {
    update(state, { payload: unread }) {
      return unread;
    },
  },
};
