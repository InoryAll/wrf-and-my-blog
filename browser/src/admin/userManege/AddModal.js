/**
 * 添加用户组件
 */
import React from 'react';
import { Form, Modal, Button, Input } from 'antd';

const FormItem = Form.Item;
class AddModal extends React.Component{
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
    this.props.onChange(3, false);
  };
  handleCancel = (e) => {
    this.setState({ visible: false });
    this.props.onChange(3, false);
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
        title="添加用户"
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
              })(
                <Input />
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
              })(
                <Input type="password" />
              )
            }
          </FormItem>
          <FormItem
            label="再次输入"
            hasFeedback
            {...formItemLayout}
          >
            {
              getFieldDecorator('rePassword',{
                rules:[{ required: true, message: '请再次输入密码' }],
              })(
                <Input type="password" />
              )
            }
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(AddModal);
