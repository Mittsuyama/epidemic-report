import React from 'react';

export default (props: any) => {
  const { match } = props;

  return (
    <div>{match.params.function}</div>
  );
};
