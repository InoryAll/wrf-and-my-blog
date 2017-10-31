/**
 * 留言添加组件 messageadd
 */
import React from 'react';
import moment from 'moment';
import { Form, Input, Button, Card, DatePicker } from 'antd';
import './css/messageAdd.css';

const FormItem = Form.Item;
const { TextArea } = Input;
class MessageAdd extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 1 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
    };
    const textItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 1 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 4,
          offset: 20,
        },
      },
    };
    return (
      <div className="message-add-card">
        <Card className="message-card">
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="姓名"
              hasFeedback
            >
              {getFieldDecorator('author', {
                rules: [{
                  required: true, message: '请输入姓名',
                }],
              })(
                <Input placeholder="请输入你的姓名"/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="日期"
              hasFeedback
            >
              {getFieldDecorator('date', {
                rules: [{
                  required: true, message: '请输入日期',
                }],
                initialValue: moment(),
              })(
                <DatePicker format="YYYY-MM-DD" disabled />
              )}
            </FormItem>
            <FormItem
              {...textItemLayout}
              label="内容"
              hasFeedback
            >
              {getFieldDecorator('content', {
                rules: [{
                  required: true, message: '请输入内容',
                }],
              })(
                <TextArea rows={10} placeholder="请输入留言内容..."/>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button className="message-btn">重置</Button>
              <Button type="primary" htmlType="submit" className="message-btn">提交</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(MessageAdd);