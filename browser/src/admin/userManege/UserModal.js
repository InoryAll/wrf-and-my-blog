/**
 * 查看/修改用户组件
 */
import React from 'react';
import { Form, Modal, Button, Input } from 'antd';

const FormItem = Form.Item;
class UserModal extends React.Component {
  state = {
    visible: this.props.visible,
  };
  componentWillReceiveProps(nextProps) {
   this.setState({
     visible: nextProps.visible,
   });
  }
  handleOk = (e) => {
    const { getFieldsValue } = this.props.form;
    if (this.props.type === 'search') {
      this.props.onChange(1, false);
    }
    if (this.props.type === 'update') {
      const values = getFieldsValue();
      this.props.onChange(2, false);
    }
  };
  handleCancel = (e) => {
    this.setState({ visible: false });
    if (this.props.type === 'search') {
      this.props.onChange(1, false);
    }
    if (this.props.type === 'update') {
      this.props.onChange(2, false);
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // this.handleOk({...values});
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { currentUser } = this.props;
    const isUpdate = this.props.type==='update';
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
        <Modal
          title="查看/修改用户"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" size="large" onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              label="用户名"
              hasFeedback
              {...formItemLayout}
            >
              {
                getFieldDecorator('username',{
                  rules:[{ required: true, message: '请输入用户名' }],
                  initialValue: currentUser && currentUser.username,
                })(
                  <Input disabled={!isUpdate} />
                )
              }
            </FormItem>
            <FormItem
              label="密码"
              hasFeedback
              {...formItemLayout}
            >
              {
                getFieldDecorator('password',{
                  rules:[{ required: true, message: '请输入密码' }],
                  initialValue: currentUser && currentUser.password,
                })(
                  <Input type="password" disabled={!isUpdate} />
                )
              }
            </FormItem>
          </Form>
        </Modal>
    );
  }
}

export default Form.create()(UserModal);
