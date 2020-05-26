import React from 'react';
import Layout from '../Layout';
import DemoDoc from './DemoDoc';
import Doc from '../Docs/doc';

export default class Component extends React.Component {

  render(){
    const { route, data, routeParams, pageData, utils } = this.props;
    console.log('component...', this.props);
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
            ? <DemoDoc
              routeParams={routeParams}
              pageData={pageData}
              utils={utils}
            />
            : <Doc pageData={pageData} utils={utils}/>
        }
      </Layout>
    )
  }
}
