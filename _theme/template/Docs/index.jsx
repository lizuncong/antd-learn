import React from 'react';
import Layout from '../Layout';
import Doc from './doc';

export default function Docs(props){
  const { route, data, routeParams, pageData, utils } = props;
  return (
    <Layout
      route={route}
      data={data}
      routeParams={routeParams}
    >
      <Doc
        pageData={pageData}
        utils={utils}
      />
    </Layout>
  )
}
