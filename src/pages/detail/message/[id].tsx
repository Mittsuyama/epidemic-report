import React, { useState, useEffect } from 'react';
import { queryMessageDetail } from '@/utils/api';
import '@/styles/message.less';
import { connect } from 'umi';

const MessageDetail = (props: any) => {
  const article = useContent(props.dispatch, props.match.params.id);

  return (
    <div className="message-detail-container">
      <div className="title">{article.title}</div>
      <div className="time">{article.time}</div>
      <hr />
      <pre className="content">{article.content}</pre>
    </div>
  );
}

const useContent = (dispatch: Function, id: string) => {
  const [article, setArticle] = useState({
    title: '',
    time: '',
    content: '',
  });
  useEffect(() => {
    (async function() {
      const result: any = await queryMessageDetail(id);
      if(result.status === 200) {
        setArticle(result.data);
        dispatch({
          type: 'navigation/update',
          payload: {
            title: result.data.title,
            last: '消息',
            back: true,
          }
        });
      }
    })();
  }, []);
  return article;
};

// @ts-ignore
export default connect(({ navigation }) => ({
  navigation,
}))(MessageDetail);

