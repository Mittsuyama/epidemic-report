import ajax from './ajax';

// 获取消息列表
export const queryMessageList = () => ajax('GET', 'api/message/list');

// 获取消息详细
export const queryMessageDetail = (id: string) =>
  ajax('GET', `api/message/detail/${id}`);
