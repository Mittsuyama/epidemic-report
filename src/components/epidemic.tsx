import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import '@/styles/epidemic.less';

export default () => {
  const info = [
    { label: '国外确诊', value: '461318', compare: '+53833' },
    { label: '境外输入确诊', value: '595', compare: '+54' },
    { label: '国内确诊', value: '82163', compare: '+203' },
    { label: '黑龙江确诊', value: '484', compare: '+0' },
  ];

  return (
    <div className="epidemic-container">
      <WhiteSpace size="lg" />
      <Card full>
        <Card.Header
          title="疫情信息"
          extra={
            <span style={{ fontSize: 14 }}>{`截止：${'2020.3.27 19:49'}`}</span>
          }
        />
        <Card.Body>
          <div className="main-box">
            {info.map((item, index) => {
              return (
                <div className="item">
                  <div className="head">{item.value}</div>
                  <div className="main">{item.label}</div>
                  <div className="extra">{item.compare}</div>
                </div>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
