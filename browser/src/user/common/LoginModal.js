/**
 * 第三方登录框组件 loginmodal
 */
import React from 'react';
import { Modal, Card, Row, Col, Button } from 'antd';
import _ from 'lodash';
import './css/loginModal.css';

class LoginModal extends React.Component{
  state = {
    loading: false,
    visible: this.props.visible,
  };
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.visible, nextProps.visible)) {
      this.setState({
        visible: nextProps.visible,
      });
    }
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
    this.props.onModalChange(false);
  };
  handleCancel = () => {
    this.setState({ visible: false });
    this.props.onModalChange(false);
  };
  onQQLogin = () => {
  
  };
  onWechatLogin = ()=> {
  
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
          width={570}
        >
          <Row>
            <Col span={8} offset={3}>
              <div className="login-container">
                <Button className="login-div" onClick={this.onQQLogin}>
                  <i className="iconfont icon-QQ login-qq" />
                </Button>
                <h1 className="login-h">QQ登录</h1>
              </div>
            </Col>
            <Col span={8} offset={2}>
              <div className="login-container">
                <Button className="login-div" onClick={this.onWechatLogin}>
                  <i className="iconfont icon-weixin login-weixin" />
                </Button>
                <h1 className="login-h">微信登录</h1>
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
