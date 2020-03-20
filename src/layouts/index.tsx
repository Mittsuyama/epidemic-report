import React from 'react';
import { NavBar } from 'antd-mobile';
import { connect } from 'umi';
import '@/styles/navigation.less';

const layout = (props: any) => {
  const { navigation } = props;
  return (
    <div className="navigation-container">
      <div className="navigation-box">
        <NavBar mode="light">{navigation}</NavBar>
      </div>
      <div className="main-box">{props.children}</div>
    </div>
  );
};

// @ts-ignore
export default connect(({ navigation }) => ({
  navigation,
}))(layout);
