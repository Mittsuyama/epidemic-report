import ajax from './ajax';

// 获取消息列表
export const queryMessageList = () => ajax('GET', 'api/message/list');
