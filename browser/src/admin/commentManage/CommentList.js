/**
 * 所有文章列表组件 commentlist
 */
import React from 'react';
import { Table, Card, Button } from  'antd';
import _ from 'lodash';
import { fetchAllComments, fetchCommentById } from '../../action/action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './css/commentList.css';
import CommentModal from "./CommentModal";

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visible: false,
            type: '',
        };
    }
    componentWillMount(){
        this.props.fetchAllComments();
    }
    showModal = (id, record) => {
        switch (id) {
          case 1:
              this.setState({
                visible: true,
                type: 'search',
              });
              // 调用查询
              this.handleSearch(record);
              break;
          case 2:
              this.setState({
                visible: true,
                type: 'update',
              });
              // 调用查询
            this.handleUpdate(record);
              break;
        }
    };
    onChange = (id,visible) => {
        this.setState({
          visible: visible
        });
    };
    handleSearch(record){
        this.props.fetchCommentById(record._id);
    }
    handleUpdate(record){
        this.props.fetchCommentById(record._id);
    }
    handleDelete(comment){
        // 处理删除文章信息的函数

        //删除的确认框出现...
        // browserHistory.push();
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
            title:'文章标题',
            dataIndex:'title',
            key:'title'
        },{
            title:'文章概要',
            dataIndex:'summary',
            key:'summary',
            width: '40%',
        },{
            title:'作者',
            dataIndex:'author',
            key:'author'
        },{
            title:'日期',
            dataIndex:'date',
            key:'date'
        },{
            title:'操作',
            key: 'action',
            render: (text,record,index) =>{
                return (
                    <div>
                        <Button className="action-btn" onClick={()=>{this.showModal(1, record)}}>查看</Button>
                        <Button type="primary" className="action-btn" onClick={()=>{this.showModal(2, record)}}>修改</Button>
                        <Button className="action-btn" onClick={()=>{this.handleDelete(record)}}>删除</Button>
                    </div>
                );
            }
        }];
        return (
            <div>
                <Card bordered={false} className="comment-list-card">
                    <Table
                      columns={columns}
                      dataSource={commentList}
                      rowKey={(record) => { return record._id }}
                    />
                </Card>
                <CommentModal
                  onChange={this.onChange}
                  visible={this.state.visible}
                  type={this.state.type}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
     comments: state.comment.comments,
     user: state.login,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAllComments, fetchCommentById },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);
