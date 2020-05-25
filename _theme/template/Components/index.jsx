import React from 'react';
import Layout from '../Layout';
import DemoArticle from './DemoArticle';
import PureArticle from '../Docs/doc';

export default class Component extends React.Component {

  render(){
    const { route, data, routeParams, pageData, utils } = this.props;
    let type;
    if (pageData.demo) {
      type = 'demo';
    }
    return (
      <Layout
        route={route}
        data={data}
        routeParams={routeParams}
      >
        {
          type === 'demo'
            ? <DemoArticle
              routeParams={routeParams}
              pageData={pageData}
              utils={utils}
            />
            : <PureArticle pageData={pageData} utils={utils}/>
        }
      </Layout>
    )
  }
}
