import React from 'react';
import { Row, Col } from 'antd';
import CodePreview from './CodePreview';

export default class DemoItem extends React.Component {

  render() {
    const { title, content, code, children } = this.props;
    return <div className="demo-item">
      <h3 className="demo-title">{title}</h3>
      <div className="demo-desc">{content}</div>
      <Row ref={ ref => { this.watchRef = ref; } }>
        <Col span={12} className="demo-item-code">
          <CodePreview title={title}>{code}</CodePreview>
        </Col>
        {
           <Col span={12} className="demo-item-preview">
              {children}
            </Col>
        }
      </Row>
    </div>;
  }
};
