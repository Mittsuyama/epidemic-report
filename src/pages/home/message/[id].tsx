import React, { useState, useEffect } from 'react';

export default (props: any) => {
  const article = useContent();
  return (
    <div>
      <div>{props.match.params.id}</div>
    </div>
  );
}

const useContent = () => {
  const [article, setArticle] = useState({
    title: '',
    content: '',
  });
  useEffect(() => {

  }, []);
  return article;
};
