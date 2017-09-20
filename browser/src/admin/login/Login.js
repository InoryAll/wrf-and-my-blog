/**
 * 管理员登录组件 login
 */
import React from 'react';
import { Card, Row, Col, Form, Input, Icon, Button, Alert } from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doLogin} from "../../action/action";
import './css/login.css';

const FormItem=Form.Item;
class Login extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let user={
          username:values.username,
          password:values.password
        };
        this.props.doLogin(user);
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    const formLayout={
      labelCol:{
        xs: { span: 24 },
        sm: { span: 4}
      },
      wrapperCol:{
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <div>
        <Row>
          <Col>
            <div className="admin-title">
              WTF&&TRJ后台管理系统
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <Card title="登录" bordered={false} className="login-card">
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem
                  label="用户名"
                  {...formLayout}
                  hasFeedback
                >
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名' }],
                  })(
                    <Input placeholder="请输入用户名" />
                  )}
                </FormItem>
                <FormItem
                  label="密码"
                  {...formLayout}
                  hasFeedback
                >
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }],
                  })(
                    <Input type="password" placeholder="密码" />
                  )}
                </FormItem>
                <FormItem>
                  <Row>
                    <Col span={16} offset={4}>
                      <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                        登录
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={16} offset={4}>
                      <p className="tip"><Icon type="exclamation-circle-o" />    注意:登录出现问题请联系田田田</p>
                    </Col>
                  </Row>
                </FormItem>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    user:state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doLogin },dispatch);
}

const loginForm=Form.create()(Login);
const loginContainer=connect(mapStateToProps,mapDispatchToProps)(loginForm);
export default loginContainer;