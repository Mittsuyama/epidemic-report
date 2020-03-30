import ajax from './ajax';

// 获取消息列表
export const queryMessageList = () => ajax('GET', 'api/message/list');

// 获取消息详细
export const queryMessageDetail = (id: string) =>
  ajax('GET', `api/message/detail/${id}`);

// personal information update
export const queryPersonalInformationUpdate = (params: any) =>
  ajax('POST', 'api/info/info', params);

// everyday personally reporting
export const queryPersonalReport = (params: any) =>
  ajax('POST', 'api/info/personal', params);

// everyday dormitory reporting
export const queryRoomReport = (params: any) =>
  ajax('POST', 'api/info/dorm', params);
