import React from 'react';
import ReactDOM from 'react-dom';
import DemoItem from './DemoItem';

export default class DemoDoc extends React.Component {
  render() {
    const { pageData, utils } = this.props;
    const demoComponent = Object.keys(pageData.demo).map(key => pageData.demo[key])
      .filter(item => !item.meta.hidden)
      .sort((a, b) => a.meta.order - b.meta.order)
      .map((item, i) => {
        const content = utils.toReactComponent(['div'].concat(item.content));
        return (<DemoItem
          key={i}
          title={item.meta.title}
          content={content}
          code={utils.toReactComponent(item.highlightedCode)}
        >
          {item.preview(React, ReactDOM)}
        </DemoItem>);
      });
    const pageContent = pageData.index.content;
    const pageAPI = pageData.index.api;
    const title = pageData.index.meta.title;
    return <div>
      <h1>{title}</h1>
      <div className="page-content">
        {utils.toReactComponent(pageContent)}
      </div>
      <div className="demo-wrapper">
        {demoComponent}
      </div>
      <div className="page-api">
        {utils.toReactComponent(pageAPI)}
      </div>
    </div>;
  }
}
