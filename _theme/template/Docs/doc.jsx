import React from 'react';

export default function Doc(props) {
  const { pageData, utils } = props;
  const pageContent = pageData.content;
  const title = pageData.meta.title;
  return <div>
    <h1>{title}</h1>
    <div className="page-content">
      {utils.toReactComponent(pageContent)}
    </div>
  </div>;
};
