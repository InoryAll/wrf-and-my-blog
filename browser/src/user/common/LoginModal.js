/**
 * 第三方登录框组件 loginmodal
 */
import React from 'react';
import { Modal, Card, Row, Col, Button } from 'antd';
import './css/loginModal.css';

class LoginModal extends React.Component{
  state = {
    loading: false,
    visible: true,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title="登录"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Row>
            <Col span={10}>
              <Card className="QQ-login login-card">
              
              </Card>
            </Col>
            <Col span={10} offset={4}>
              <Card className="wechat-login login-card">
              
              </Card>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
