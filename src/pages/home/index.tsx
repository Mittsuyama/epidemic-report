import React from 'react';
import { Grid } from 'antd-mobile';
import { connect, history } from 'umi';

import '@/styles/home.less';

let dispatch: any = null;

const Home = (props: any) => {
  dispatch = props.dispatch;

  const bookingGrid = [
    { text: '教室', icon: 'icon-jiaoshi', link: 'classroom' },
    { text: '食堂', icon: 'icon-shitang', link: 'canteen' },
    { text: '快递包裹', icon: 'icon-kuaidibaoguo', link: 'express' },
    { text: '超市', icon: 'icon-Shoppingcartdelete', link: 'supermarket' },
  ];

  return (
    <div className="home-function-container">{gridRender(bookingGrid)}</div>
  );
};

const handleClick = (data: any) => {
  dispatch({
    type: 'navigation/update',
    payload: {
      title: data.text,
      last: '主页',
      back: true,
    },
  });
  history.push(`/booking/${data.link}`);
};

const gridRender = (data: any) => {
  return (
    <div className="grid-box">
      <div className="sub-title">预约服务</div>
      <Grid
        data={data}
        onClick={(dataItem: any) => handleClick(dataItem)}
        renderItem={(dataItem: any) => (
          <div className="grid-item">
            <div className="info">
              <div className="icon">
                <i className={`iconfont ${dataItem.icon}`} />
              </div>
              <div className="text">{dataItem.text}</div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

// @ts-ignore
export default connect(({ navigation }) => ({
  navigation,
}))(Home);
