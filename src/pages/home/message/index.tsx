import React, { useState } from 'react';
import { List, WhiteSpace } from 'antd-mobile';

export default () => {
  const unreadList: any = useUnreadList();
  const readList: any = useReadList();
  return (
    <div className="message-container">
      {messageListRender('未读信息', unreadList)}
      {messageListRender('已读信息', readList)}
    </div>
  );
};

const messageListRender = (title: string, list: []) => {
  const { Item } = List;
  return (
    <div>
      <List renderHeader={title}>
        {list.length > 1 ? (
          list.map((item: any, index: number) => {
            return (
              <Item
                key={index + item.time}
                arrow="horizontal"
                multipleLine
                onClick={() => {}}
              >
                {item.title}
                <Item.Brief>{item.time}</Item.Brief>
              </Item>
            );
          })
        ) : (
          <Item>暂无信息</Item>
        )}
      </List>
      <WhiteSpace />
    </div>
  );
};

const useUnreadList = () => {
  const [unreadList, setUnreadList] = useState([
    {
      title:
        '哈工大 i 聘直播：聚英才 著神箭 —— 航天科工四院哈工大云端宣讲会通知',
      time: '2020-03-19',
    },
    {
      title: '转发中国铁路局哈尔滨集团有限公司哈尔滨站通告',
      time: '2020-03-18',
    },
  ]);
  return unreadList;
};

const useReadList = () => {
  const [readList, setReadList] = useState([
    {
      title: '关于收看"全国大学生同上一堂疫情防控思政大课"的通知',
      time: '2020-03-08',
    },
    {
      title:
        '关于和黑龙江省连通、移动、电信运营商为我校学生提供优惠流量包的通知',
      time: '2020-03-10',
    },
    {
      title: '重要通知：25 日中午，你我都是华为云平台测试员！',
      time: '2020-02-24',
    },
  ]);
  return readList;
};
