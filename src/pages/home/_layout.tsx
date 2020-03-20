import React, { useState, useEffect } from 'react';
import '@/styles/bottombar.less';
import { TabBar } from 'antd-mobile';
import { history, connect } from 'umi';

const layout = (props: any) => {
  const { dispatch } = props;
  const tabBarMenu = useTabBarMenu();

  return (
    <div className="home-container">
      <div className="main-container">
        <div>{props.children}</div>
      </div>
      <div className="tab-bar-container">
        {tabBarRender(
          dispatch,
          tabBarMenu,
          getLastPath(props.location.pathname),
        )}
      </div>
    </div>
  );
};

const useTabBarMenu = () => {
  const [tabBarMenu, setTabBarMenu] = useState([
    { name: 'home', title: '主页', icon: 'icon-home', badge: 0 },
    { name: 'message', title: '消息', icon: 'icon-message', badge: 2 },
    { name: 'me', title: '我的', icon: 'icon-user', badge: 0 },
  ]);
  useEffect(() => {}, []);
  return tabBarMenu;
};

// get the last parameter from route path
const getLastPath = (path: string) => {
  const pathList = path.split('/');
  return pathList[pathList.length - 1];
};

// render tab bar
const tabBarRender = (dispatch: any, tabBarMenu: any, path: string) => {
  const [selectMenu, setSelectMenu] = useState(path);
  const { Item } = TabBar;
  return (
    <TabBar unselectedTintColor="#333" tintColor="#66CCFF" barTintColor="white">
      {tabBarMenu.map((item: any, index: number) => {
        return (
          <Item
            title={item.title}
            key={index}
            icon={<i className={`iconfont ${item.icon}`} />}
            badge={item.badge ? item.badge : false}
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
              dispatch({
                type: 'navigation/update',
                payload: item.title,
              });
            }}
          />
        );
      })}
    </TabBar>
  );
};

// @ts-ignore
export default connect(({ navigation }) => ({
  navigation,
}))(layout);
