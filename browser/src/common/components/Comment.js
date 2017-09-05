/**
 * 文章列表 comment
 */
import React from 'react';
import ReacDOM from 'react-dom';
import '../css/comment.css';
import {Row,Col,Button,Card} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAllComments} from "../../action/action";
import {Link} from 'react-router';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllComments();
    }

    render(){
        const comments=this.props.comments;
        let commentList=[];
        comments && comments.forEach(function (item,index) {
            commentList.push(
                <Card className="comment-card" bordered={false}>
                    <div className="comment" key={index}>
                        <h1>{item.title}</h1>
                        <hr/>
                        <p>{item.summary}</p>
                        <div>
                            <Row>
                                <Col lg={{span:6,offset:13}} md={{span:10,offset:6}} span={14}>
                                    <span className="date">发布日期:{item.date}</span>
                                </Col>
                                <Col lg={{span:2}} md={{span:3}} span={4}>
                                    <span className="author">作者:{item.author}</span>
                                </Col>
                                <Col lg={{span:3}} md={{span:5}} span={6}>
                                    <Button type="primary" ghost className="more"><Link to={`detail/${item._id}`}>查看更多</Link></Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Card>
            );
        });
        return (
            <div>
                { commentList }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments:state.comment.comments
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAllComments},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);

