export default {
  classroom: [
    { type: 'input', name: 'name', title: '姓名' },
    { type: 'input', name: 'id', title: '学号' },
    {
      type: 'picker',
      name: 'building',
      title: '教学楼',
      option: [
        { label: '正心楼', value: '正心楼' },
        { label: '诚意楼', value: '诚意楼' },
        { label: '明德楼', value: '明德楼' },
        { label: '致知楼', value: '致知楼' },
      ],
    },
    { type: 'input', name: 'classroom', title: '教室编号' },
    { type: 'time', name: 'start_time', title: '开始时间' },
    { type: 'time', name: 'end_time', title: '结束时间' },
  ],
  canteen: [
    { type: 'input', name: 'name', title: '姓名' },
    { type: 'input', name: 'id', title: '学号' },
    {
      type: 'picker',
      name: 'building',
      title: '食堂',
      option: [
        { label: '学士', value: '学士' },
        { label: '学院', value: '学院' },
        { label: '学子', value: '学子' },
        { label: '友来餐厅', value: '友来餐厅' },
      ],
    },
    { type: 'time', name: 'start_time', title: '开始时间' },
    { type: 'time', name: 'end_time', title: '结束时间' },
  ],
  express: [
    { type: 'input', name: 'name', title: '姓名' },
    { type: 'input', name: 'id', title: '学号' },
    { type: 'time', name: 'start_time', title: '开始时间' },
    { type: 'time', name: 'end_time', title: '结束时间' },
  ],
  supermarket: [
    { type: 'input', name: 'name', title: '姓名' },
    { type: 'input', name: 'id', title: '学号' },
    { type: 'time', name: 'start_time', title: '开始时间' },
    { type: 'time', name: 'end_time', title: '结束时间' },
  ],
};
