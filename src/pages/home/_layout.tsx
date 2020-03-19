import React from 'react';
import './bottombar.less';

export default (props: any) => {
  return (
    <div className="home-container">
      <div className="main-container">
        <div>Home Page</div>
        <div>{props.children}</div>
      </div>
      <div className="tab-bar-container">1</div>
    </div>
  );
};
