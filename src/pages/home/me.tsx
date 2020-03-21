import React from 'react';
import { List, WhiteSpace } from 'antd-mobile';

import '@/styles/me.less';

export default () => {
  const meList = [
    { title: '切换账户', direction: '', icon: 'icon-exchange' },
    { title: '联系客服', direction: '', icon: 'icon-phone' },
    { title: '关于', direction: '', icon: 'icon-about' },
  ];
  const anotherList = [
    { title: '设置', direction: '', icon: 'icon-setting' },
    { title: '退出登录', direction: '', icon: 'icon-log-out' },
  ];

  return (
    <div className="me-container">
      {userPortraitRender()}
      {listRender(meList)}
      {listRender(anotherList)}
    </div>
  );
};

const userPortraitRender = () => {
  const { Item } = List;
  return (
    <List>
      <Item
        thumb={
          <div className="user-portrait-box">
            <i className="iconfont icon-user" />
          </div>
        }
        arrow="horizontal"
        multipleLine
        onClick={() => {}}
      >
        张三（经济与管理学院） <Item.Brief>学号：1171000999</Item.Brief>
      </Item>
    </List>
  );
};

const listRender = (list: any) => {
  const { Item } = List;
  return (
    <div>
      <WhiteSpace size="xl" />
      {list.map((item: any, index: number) => {
        return (
          <div key={index}>
            <List className="main-list">
              <Item
                thumb={<i className={`iconfont ${item.icon}`} />}
                arrow="horizontal"
                onClick={() => {}}
              >
                {item.title}
              </Item>
            </List>
          </div>
        );
      })}
    </div>
  );
};
