import ajax from './ajax';

// 获取消息列表
export const queryMessageList = () => ajax('GET', 'api/message/list');

// 获取消息详细
export const queryMessageDetail = (id: string) =>
  ajax('GET', `api/message/detail/${id}`);

// classroom booking
export const queryClassroomBooking = (params: any) =>
  ajax('POST', 'api/booking/classroom', params);

// canteen booking
export const queryCanteenBooking = (params: any) =>
  ajax('POST', 'api/booking/canteen', params);

// supermarket booking
export const querySupermarketBooking = (params: any) =>
  ajax('POST', 'api/booking/supermarket', params);

// express booking
export const queryExpressBooking = (params: any) =>
  ajax('POST', 'api/booking/express', params);

// personal information update
export const queryPersonalInformationUpdate = (params: any) =>
  ajax('POST', 'api/info/info', params);

// everyday personally reporting
export const queryPersonalReport = (params: any) =>
  ajax('POST', 'api/info/personal', params);

// everyday dormitory reporting
export const queryRoomReport = (params: any) =>
  ajax('POST', 'api/info/dorm', params);
