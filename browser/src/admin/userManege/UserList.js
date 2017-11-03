/**
 * 所有用户列表组件
 */
import React from 'react';
import { Table, Card, Button, Modal } from  'antd';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchAllUsers, fetchDeleteUser } from "../../action/action";
import UserModal from './UserModal';
import './css/userList.css';
import AddModal from "./AddModal";

const confirm = Modal.confirm;
class UserList extends React.Component {
    state = {
        visible: false,
        type: '',
        currentUser: undefined,
    };
    componentWillMount(){
      if (!this.props.user.username) {
        Modal.error({
          title:'失败',
          content:'请登录！',
          onOk(){
            browserHistory.push('/admin/login');
          }
        });
      } else {
        this.props.fetchAllUsers();
      }
    }
    showModal = (id,record) => {
        switch (id) {
          case 1:
            this.setState({
              visible: true,
              type: 'search',
              currentUser: record,
            });
            this.handleSearch(record);
            break;
          case 2:
            this.setState({
              visible: true,
              type: 'update',
              currentUser: record,
            });
            this.handleUpdate(record);
            break;
          case 3:
            this.setState({
              visible: true,
            });
            break;
        }
    };
    onChange = (id,visible) => {
        this.setState({
          visible: visible,
        });
    };
    handleSearch = (record) => {
      // 处理搜索
    };
    handleUpdate = (record) => {
      // 处理更新
    };
    handleDelete = (record) => {
      // 处理删除
      const { fetchDeleteUser } = this.props;
      confirm({
        title: '你确认要删除此用户么?',
        content: '操作不可恢复',
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          console.log('OK');
          fetchDeleteUser(record);
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    render(){
        const { users } = this.props;
        let userList = [];
        userList = users;
        const columns=[{
            title:'用户名',
            dataIndex:'username',
            key:'username',
            width: '70%',
        },{
            title:'操作',
            key: 'action',
            render: (text,record,index) =>{
                return (
                    <div>
                        <Button className="action-btn" onClick={()=>{this.showModal(1,record)}}>查看</Button>
                        <Button type="primary" className="action-btn" onClick={()=>{this.showModal(2,record)}}>修改</Button>
                        <Button className="action-btn" onClick={()=>{this.handleDelete(record)}}>删除</Button>
                    </div>
                );
            }
        }];
        return (
            <Card bordered={false} className="user-list-card">
                <div className="add-btn">
                  <Button type="primary" onClick={()=>{ this.showModal(3,null) }}>添加用户</Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={userList}
                    rowKey={(record) => { return record._id }}
                />
                <UserModal
                    visible={this.state.visible}
                    onChange={this.onChange}
                    type={this.state.type}
                    currentUser={this.state.currentUser}
                />
                <AddModal
                    visible={this.state.visible}
                    onChange={this.onChange}
                />
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.user.users,
        user: state.login,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAllUsers, fetchDeleteUser },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
