/**
 * 所有用户列表组件
 */
import React from 'react';
import { Table, Card, Button } from  'antd';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './css/userList.css';

class UserList extends React.Component {
    componentWillMount(){
        this.props.fetchAllComments();
    }

    render(){
        const { comments, user } = this.props;
        // 选出符合条件的comment，并且生成出来，为了方便测试，先注释。
        let commentList=[];
        comments && comments.map((comment)=>{
            /*if (comment.author === user.username ) {
             commentList.push(comment);
             }*/
            commentList.push(comment);
        });
        console.log(commentList);
        const columns=[{
            title:'用户名',
            dataIndex:'username',
            key:'username'
        },{
            title:'操作',
            key: 'action',
            render: (text,record,index) =>{
                return (
                    <div>
                        <Button className="action-btn" onClick={()=>{this.handleSearch(record)}}>查看</Button>
                        <Button type="primary" className="action-btn" onClick={()=>{this.handleUpdate(record)}}>修改</Button>
                        <Button className="action-btn" onClick={this.handleDelete(record)}>删除</Button>
                    </div>
                );
            }
        }];
        return (
            <Card bordered={false} className="comment-list-card">
                <Table
                    columns={columns}
                    dataSource={commentList}
                />
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
