import React, { useEffect, useState } from 'react';
import { List, WhiteSpace } from 'antd-mobile';
import { queryMessageList } from '@/utils/api';
import { connect } from 'umi';

const Message = (props: any) => {
  const { dispatch } = props;
  const [unreadList, readList]: any = useList(dispatch);

  return (
    <div className="message-container">
      {messageListRender('未读信息', unreadList)}
      {messageListRender('已读信息', readList)}
    </div>
  );
};

const messageListRender = (title: string, list: []) => {
  const { Item } = List;
  return (
    <div>
      <List renderHeader={title}>
        {list.length > 1 ? (
          list.map((item: any, index: number) => {
            return (
              <Item
                key={index + item.time}
                arrow="horizontal"
                multipleLine
                onClick={() => {}}
              >
                {item.title}
                <Item.Brief>{item.time}</Item.Brief>
              </Item>
            );
          })
        ) : (
          <Item>暂无信息</Item>
        )}
      </List>
      <WhiteSpace />
    </div>
  );
};

const useList = (dispatch: Function) => {
  const [unreadList, setUnreadList] = useState([]);
  const [readList, setReadList] = useState([]);
  useEffect(() => {
    (async function() {
      const result: any = await queryMessageList();
      if (result.status === 200) {
        const { data } = result;
        setUnreadList(data.unreadList);
        setReadList(data.readList);
        dispatch({
          type: 'unread/update',
          payload: data.unreadList.length,
        });
      }
    })();
  }, []);
  return [unreadList, readList];
};

// @ts-ignore
export default connect(({ unread }) => ({
  unread,
}))(Message);
