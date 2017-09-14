/**
 * 管理员登录组件 login
 */
import React from 'react';
import { Card, Row, Col } from 'antd';

class Login extends React.Component{
  render(){
    return (
      <Row>
        <Col span={10} offset={7}>
          <Card title="Card title" bordered={false} className="login-card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    );
  };
}

export default Login;