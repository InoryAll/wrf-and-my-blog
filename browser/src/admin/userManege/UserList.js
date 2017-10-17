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
import './css/userList.css';

class UserList extends React.Component {
    componentWillMount(){
        this.props.fetchAllUsers();
    }
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
                        <Button className="action-btn" onClick={()=>{this.handleSearch(record)}}>查看</Button>
                        <Button type="primary" className="action-btn" onClick={()=>{this.handleUpdate(record)}}>修改</Button>
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
