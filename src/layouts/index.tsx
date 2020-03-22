import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect, history } from 'umi';
import '@/styles/navigation.less';

const layout = (props: any) => {
  const { navigation, dispatch } = props;
  return (
    <div className="navigation-container">
      {navigation.back ? (
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            history.goBack();
            dispatch({
              type: 'navigation/update',
              payload: {
                title: navigation.last,
                back: false,
                last: '',
              },
            });
          }}
        >
          <span
            style={{ width: 290, overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {navigation.title}
          </span>
        </NavBar>
      ) : (
        <NavBar mode="light">{navigation.title}</NavBar>
      )}
      <div className="main-box">{props.children}</div>
    </div>
  );
};

// @ts-ignore
export default connect(({ navigation }) => ({
  navigation,
}))(layout);
