/**
 * 查看/修改文章组件 commentmodal
 */
import React from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
class CommentModal extends React.Component{
  state = {
    loading: false,
    visible: this.props.visible,
  };
  componentWillReceiveProps(nextProps){
    this.setState({
      visible: nextProps.visible,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render(){
    const { visible, loading } = this.state;
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
      <div>
        <Modal
          visible={visible}
          title="查看/修改文章信息"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={600}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              label="标题"
              hasFeedBack
              {...formItemLayout}
            >{
              getFieldDecorator('title', {
                rules: [{required: true, message: '请输入文章标题!'}]
              })(
                <Input/>
              )
            }
            </FormItem>
            <FormItem
              label="摘要"
              hasFeedBack
              {...formItemLayout}
            >{
              getFieldDecorator('summary', {
                rules: [{required: true, message: '请输入文章摘要!'}]
              })(
                <Input/>
              )
            }
            </FormItem>
            <FormItem
              label="作者"
              hasFeedBack
              {...formItemLayout}
            >{
              getFieldDecorator('author', {
                rules: [{required: true, message: '请选择作者!'}]
              })(
                <Select placeholder="请选择作者">
                  <Option value="trj">trj</Option>
                  <Option value="wrf">wrf</Option>
                </Select>
              )
            }
            </FormItem>
            <FormItem
              label="日期"
              hasFeedBack
              {...formItemLayout}
            >{
              getFieldDecorator('date', {
                rules: [{
                  type: 'object', required: true, message: '请选择时间!'
                }],
                initialValue: moment(new Date(),'YYYY-MM-DD')
              })(
                <DatePicker disabled/>
              )
            }
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
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(CommentModal);