import React from 'react';
import DocMenu from './DocMenu';
import ComponentMenu from './ComponentMenu';
import './index.less';

export default (props) => {
  const { route, defaultSelectedKey, data } = props;
  return (
    <aside id="aside">
      {
        route.path.indexOf('docs') !== -1 ?
          <DocMenu
            defaultSelectedKey={defaultSelectedKey}
            data={data.docs}
          />
          :
          <ComponentMenu
            defaultSelectedKey={defaultSelectedKey}
            data={data.components}
          />
      }
    </aside>
  )
}
