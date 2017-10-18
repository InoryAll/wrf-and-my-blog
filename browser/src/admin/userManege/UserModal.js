/**
 * 查看/修改用户组件
 */
import React from 'react';
import { Form } from 'antd';

const FormItem = Form.Item;
class UserModal extends React.Component {
  componentWillReceiveProps(nextProps) {
  
  }
  render() {
    return (
      <div>hello world</div>
    );
  }
}

export default Form.create()(UserModal);
