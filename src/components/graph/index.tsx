import React, { useEffect } from 'react';
import { queryBookingData } from '@/utils/api';
import { WhiteSpace } from 'antd-mobile';
import _ from 'lodash';
import './graph.less';

const F2 = require('@antv/f2');

export default (props: any) => {
  useEffect(() => {
    const _ = printGraph();
  }, []);

  return (
    <div className="graph-container">
      <WhiteSpace />
      <canvas id="booking-chart" style={{ width: '100%', height: 250 }} />
    </div>
  );
};

const printGraph = async () => {
  const result: any = await queryBookingData();
  if (result.status === 200) {
    const { data } = result;
    const chart = new F2.Chart({
      id: 'booking-chart',
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(chartDataReduce(data), {
      value: {
        tickCount: 5,
        min: 0,
      },
    });
    chart.tooltip({
      custom: true,
      onChange: (obj: any) => {
        const legend = chart.get('legendController').legends.top[0];
        console.log(legend);
      },
    });
    chart
      .line()
      .position('date*value')
      .color('type');
    chart.render();
  }
};

const chartDataReduce = (dataList: any) => {
  let result: object[] = [];
  dataList.forEach((data: any) => {
    const { title } = data;
    data.data.forEach((item: any) => {
      result.push({
        date: item.date,
        value: item.value * 1,
        type: title,
      });
    });
  });
  return result;
};
