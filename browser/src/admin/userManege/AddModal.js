/**
 * 添加用户组件
 */
import React from 'react';
import { Form, Modal, Button, Input } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { checkUserById, fetchAddUser } from "../../action/action";

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
    const params = getFieldsValue();
    this.props.fetchAddUser(params);
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
    const { getFieldDecorator,getFieldValue } = this.props.form;
    const { checkUserById } = this.props;
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
                rules:[
                  { required: true, message: '请输入用户名' },
                  { validator(rule, value, callback) {
                    const errors = [];
                    if (value) {
                      const _this = this;
                      _this.validateStatus= 'validating';
                      checkUserById(value, (data) => {
                        if (data.code === '0') {
                          _this.validateStatus = 'error';
                          errors.push({ message: '用户名已存在' });
                        } else {
                          _this.validateStatus = 'success';
                        }
                        callback(errors);
                      });
                    } else {
                      callback();
                    }
                  } },
                  ],
              })(
                <Input placeholder="请输入用户名" />
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
                <Input type="password" placeholder="请输入密码" />
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
                rules:[
                  { required: true, message: '请再次输入密码' },
                  { validator(rule, value, callback) {
                      const errors = [];
                      const pwd = getFieldValue('password');
                      if (!_.isEqual(pwd, value)) {
                        errors.push({ message: '两次输入的密码不一致' });
                        callback(errors);
                      } else {
                        callback();
                      }
                  } }
                  ],
              })(
                <Input type="password" placeholder="请再次输入" />
              )
            }
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkUserById, fetchAddUser }, dispatch);
}

AddModal = Form.create()(AddModal);
export default connect(mapStateToProps, mapDispatchToProps)(AddModal);