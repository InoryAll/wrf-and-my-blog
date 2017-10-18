/**
 * 查看/修改文章组件 commentmodal
 */
import React from 'react';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    if (this.state.type === 'search') {
      this.props.onChange(1, false);
    }
    if (this.state.type === 'update') {
      this.props.onChange(2, false);
    }
  };
  handleCancel = () => {
    this.setState({ visible: false });
    if (this.state.type === 'search') {
      this.props.onChange(1, false);
    }
    if (this.state.type === 'update') {
      this.props.onChange(2, false);
    }
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
    const { comment, type } = this.props;
    const { visible, loading } = this.state;
    const { getFieldDecorator } = this.props.form;
    const isUpdate = type === 'update';
    const isEmpty =  _.isEmpty(comment);
    let commentItem;
    comment && comment.forEach(function (item,index) {
      commentItem=item;
    });
    console.log(comment);
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
          width={800}
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
                rules: [{required: true, message: '请输入文章标题!'}],
                initialValue: isEmpty ? '' :commentItem.title,
              })(
                  isUpdate ? (<Input disabled={!isUpdate}/>) : (<span className="ant-form-text">{commentItem && commentItem.title}</span>)
              )
            }
            </FormItem>
            <FormItem
              label="摘要"
              hasFeedBack
              {...formItemLayout}
            >{
              getFieldDecorator('summary', {
                rules: [{required: true, message: '请输入文章摘要!'}],
                initialValue: isEmpty ? '' : commentItem.summary,
              })(
                <Input disabled={!isUpdate}/>
              )
            }
            </FormItem>
            <FormItem
              label="作者"
              hasFeedBack
              {...formItemLayout}
            >{
              getFieldDecorator('author', {
                rules: [{required: true, message: '请选择作者!'}],
                initialValue:isEmpty ? 'wrf' : commentItem.author,
              })(
                <Select placeholder="请选择作者" disabled>
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
                initialValue: isEmpty ? moment(new Date(),'YYYY-MM-DD') : moment(commentItem.date,'YYYY-MM-DD'),
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
                initialValue: isEmpty ? '' : commentItem.content,
              })(
                <TextArea rows="15" disabled={!isUpdate} />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comment: state.comment.comment,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

CommentModal = Form.create()(CommentModal);
export default connect(mapStateToProps,mapDispatchToProps)(CommentModal);