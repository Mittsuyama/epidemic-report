import React, { useEffect, useState } from 'react';
import { Grid, WhiteSpace } from 'antd-mobile';
import { connect, history } from 'umi';
import Epidemic from '@/components/epidemic';
import Graph from '@/components/graph';

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
    { text: '后勤点餐', icon: 'icon-e-bike--fill', link: '' },
    {
      text: '超市配送',
      icon: 'icon-valentine_-shoping-love-heart-bag',
      link: '',
    },
    { text: '线上问诊', icon: 'icon-medical-personnel-doctor', link: '' },
  ];
  const infoReport = [
    { text: '信息填写', icon: 'icon-user1', link: 'info' },
    { text: '个人上报', icon: 'icon-leftmenuiconreports', link: 'personal' },
    { text: '寝室上报', icon: 'icon-people', link: 'room' },
  ];

  return (
    <div className="home-function-container">
      <Epidemic />
      <Graph />
      {gridRender('预约服务', 'booking', bookingGrid, 'inner')}
      {gridRender('信息中心', 'info', infoReport, 'inner')}
      {gridRender('远程服务', '', remoteBooking, 'outer')}
    </div>
  );
};

const handleClick = (path: string, title: string, data: any) => {
  dispatch({
    type: 'navigation/update',
    payload: {
      title: `${title} - ${data.text}`,
      last: '主页',
      back: true,
    },
  });
  history.push(`/${path}/${data.link}`);
};

const jumpTo = (data: any) => {};

const gridRender = (title: string, path: string, data: any, type: string) => {
  return (
    <div className="grid-box">
      <WhiteSpace size="lg" />
      <div className="sub-title">{title}</div>
      <Grid
        data={data}
        onClick={(dataItem: any) =>
          type === 'inner'
            ? handleClick(path, title, dataItem)
            : jumpTo(dataItem)
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
