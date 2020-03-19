import React, { useState } from 'react';
import './bottombar.less';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';

export default (props: any) => {
  return (
    <div className="home-container">
      <div className="main-container">
        <div>{props.children}</div>
      </div>
      <div className="tab-bar-container">{tabBarRender(props.route.path)}</div>
    </div>
  );
};

// get the last parameter from route path
const getLastPath = (path: string) => {
  const pathList = path.split('/');
  return pathList[pathList.length - 1];
};

// render tab bar
const tabBarRender = (route: string) => {
  const [selectMenu, setSelectMenu] = useState(getLastPath(route));
  const tabBarMenu = [
    { name: 'home', title: '主页', icon: 'icon-yidiandiantubiao04' },
    { name: 'message', title: '消息', icon: 'icon-luntan' },
    { name: 'me', title: '我的', icon: 'icon-kehufuwu' },
  ];
  const { Item } = TabBar;
  return (
    <TabBar unselectedTintColor="#333" tintColor="#66CCFF" barTintColor="white">
      {tabBarMenu.map((item, index) => {
        return (
          <Item
            title={item.title}
            key={index}
            icon={<i className={`iconfont ${item.icon}`} />}
            selectedIcon={
              <i
                style={{ color: '#66CCFF' }}
                className={`iconfont ${item.icon}`}
              />
            }
            selected={item.name == selectMenu}
            onPress={() => {
              history.push(
                `/home${item.name === 'home' ? '' : `/${item.name}`}`,
              );
              setSelectMenu(item.name);
            }}
          />
        );
      })}
    </TabBar>
  );
};
