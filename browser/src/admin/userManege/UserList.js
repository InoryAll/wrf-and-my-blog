/**
 * 所有用户列表组件
 */
import React from 'react';
import { Table, Card, Button } from  'antd';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchAllUsers } from "../../action/action";
import UserModal from './UserModal';
import './css/userList.css';

class UserList extends React.Component {
    state = {
        visible: false,
        type: '',
    };
    componentWillMount(){
        this.props.fetchAllUsers();
    }
    showModal = (id,record) => {
        switch (id) {
          case 1:
            this.setState({
              visible: true,
              type: 'search',
            });
            this.handleSearch(record);
            break;
          case 2:
            this.setState({
              visible: true,
              type: 'update',
            });
            this.handleUpdate(record);
            break;
        }
    };
    onChange = (id,visible) => {
        this.setState({
          visible: visible,
        });
    };
    handleSearch = (record) => {
    
    };
    handleUpdate = (record) => {
    
    };
    handleDelete = (record) => {
    
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
                <Table
                    columns={columns}
                    dataSource={userList}
                />
                <UserModal
                    visible={this.state.visible}
                    onChange={this.onChange}
                    type={this.state.type}
                />
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.user.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAllUsers },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
