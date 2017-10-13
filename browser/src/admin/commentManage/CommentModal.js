/**
 * 查看/修改文章组件 commentmodal
 */
import React from 'react';
import { Modal, Button } from 'antd';

class CommentModal extends React.Component{
  state = {
    loading: false,
    visible: false,
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
  render(){
    return (
      <div>
        <Modal
        visible={visible}
        title="查看/修改文章信息"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
          <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
            Submit
          </Button>,
        ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default CommentModal;