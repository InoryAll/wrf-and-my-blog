/**
 * 博客发表组件 blogpost
 */
import React from 'react';
import { Form, Input, Card, Button, Row, Col, Select, DatePicker, Modal } from 'antd';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchComment } from "../../action/action";
import './css/blogpost.css';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
class BlogPost extends React.Component{
  componentWillMount(){
    // 页面的权限控制，暂时开放，由于安卓端的兼容性问题。
    /*if (!this.props.user.username) {
      Modal.error({
        title:'失败',
        content:'请登录！',
        onOk(){
          browserHistory.push('/admin/login');
        }
      });
    }*/
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.fetchComment({...values,date: moment(values.date).format('YYYY-MM-DD')});
        this.onReset();
      }
    });
  };
  onReset=()=>{
    const { resetFields } = this.props.form;
    resetFields();
  };
  render(){
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
    const smallFormItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
    };
    const smallerFormItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
    };
    return (
      <Card bordered={false} className="blog-post-card">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...smallFormItemLayout}
            label="标题"
            hasFeedback
          >
            {getFieldDecorator('title', {
              rules: [{
                required: true, message: '请输入标题',
              },{
                max:50, message: '标题长度不能大于20个字符!'
              }],
              initialValue: ''
            })(
              <Input placeholder="请输入标题"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="摘要"
            hasFeedback
          >
            {getFieldDecorator('summary', {
              rules: [{
                required: true, message: '请输入摘要!'
              },{
                max:50, message: '摘要长度不能大于50个字符!'
              }],
              initialValue: ''
            })(
              <Input placeholder="请输入摘要"/>
            )}
          </FormItem>
          <FormItem
            {...smallerFormItemLayout}
            label="作者"
            hasFeedback
          >
            {getFieldDecorator('author', {
              rules: [{
                required: true, message: '请选择作者!'
              }],
              initialValue: this.props.user.username ? this.props.user.username : 'wrf'
            })(
              <Select placeholder="请选择作者" disabled>
                <Option value="trj">trj</Option>
                <Option value="wrf">wrf</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...smallerFormItemLayout}
            label="日期"
            hasFeedback
          >
            {getFieldDecorator('date', {
              rules: [{
                type: 'object', required: true, message: '请选择时间!'
              }],
              initialValue: moment(new Date(),'YYYY-MM-DD')
            })(
              <DatePicker disabled />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="内容"
            hasFeedback
          >
            {getFieldDecorator('content', {
              rules: [{
               required: true, message: '请输入内容!'
              }],
              initialValue: ''
            })(
              <TextArea rows="20"/>
            )}
          </FormItem>
          <FormItem>
            <Row>
              <Col offset="6">
                <Button type="primary" htmlType="submit" className="form-btn">发布</Button>
                <Button htmlType="reset" onClick={this.onReset} className="form-btn">重置</Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    comment:state.comment.comment,
    user:state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComment },dispatch);
}

const BlogPostForm=Form.create()(BlogPost);
export default connect(mapStateToProps,mapDispatchToProps)(BlogPostForm);
