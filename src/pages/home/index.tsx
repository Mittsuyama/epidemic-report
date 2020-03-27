import React from 'react';
import { Grid, WhiteSpace } from 'antd-mobile';
import { connect, history } from 'umi';
import Epidemic from '@/components/epidemic';

import '@/styles/home/home.less';

let dispatch: any = null;

const Home = (props: any) => {
  dispatch = props.dispatch;

  const bookingGrid = [
    { text: '教室', icon: 'icon-jiaoshi', link: 'classroom' },
    { text: '食堂', icon: 'icon-shitang', link: 'canteen' },
    { text: '快递包裹', icon: 'icon-kuaidibaoguo', link: 'express' },
    { text: '超市', icon: 'icon-Shoppingcartdelete', link: 'supermarket' },
  ];
  const remoteBooking = [
    { text: '后勤点餐', icon: 'icon-bicycle-share-', link: '' },
    {
      text: '超市配送',
      icon: 'icon-valentine_-shoping-love-heart-bag',
      link: '',
    },
    { text: '线上问诊', icon: 'icon-medical-personnel-doctor', link: '' },
  ];

  return (
    <div className="home-function-container">
      <Epidemic />
      {gridRender('预约服务', bookingGrid, 'inner')}
      {gridRender('远程服务', remoteBooking, 'outer')}
    </div>
  );
};

const handleClick = (title: string, data: any) => {
  dispatch({
    type: 'navigation/update',
    payload: {
      title: `${title} - ${data.text}`,
      last: '主页',
      back: true,
    },
  });
  history.push(`/booking/${data.link}`);
};

const jumpTo = (data: any) => {};

const gridRender = (title: string, data: any, type: string) => {
  return (
    <div className="grid-box">
      <WhiteSpace size="lg" />
      <div className="sub-title">{title}</div>
      <Grid
        data={data}
        onClick={(dataItem: any) =>
          type === 'inner' ? handleClick(title, dataItem) : jumpTo(dataItem)
        }
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
