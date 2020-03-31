import React from 'react';
import { queryBookingData } from '@/utils/api';
import { WhiteSpace } from 'antd-mobile';
const F2 = require('@antv/f2');

export default (props: any) => {
  const _ = printGraph();

  return (
    <div className="graph-container">
      <WhiteSpace />
      <canvas id="booking-chart" width="100%" height="250" />
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
    chart.source(chartDataReduce(data));
  }
};

const chartDataReduce = (dataList: any) => {
  let result: object[] = [];
  dataList.forEach((data: any) => {
    const { title } = data;
    data.data.forEach((item: any) => {
      result.push({
        time: item.time,
        value: item.value,
        type: title,
      });
    });
  });
  return result;
};
