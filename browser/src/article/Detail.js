/**
 * 文章具体信息组件 detail
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'antd';
import './css/detail.css';
import github from '../static/images/github.png';
import wechat from '../static/images/wechat.png';
import Review from './Review';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCommentById} from "../action/action";

class Detail extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const id=this.props.params.id;
        this.props.fetchCommentById(id);
    }

    render(){
        const comment=this.props.comment;
        let commentItem;
        comment && comment.forEach(function (item,index) {
            commentItem=item;
        });
        return (
            <div className="detail-container">
                <Card className="detail-card" bordered={false}>
                    <div className="detail">
                        <h1>{commentItem && commentItem.title}</h1>
                        <div className="info">
                            <span>发布日期:{commentItem && commentItem.date}</span>
                            <span>作者:{commentItem && commentItem.author}</span>
                        </div>
                        <hr/>
                        <p>
                            {commentItem && commentItem.content}
                        </p>
                        <div className="contact">
                            <h3>支持我们</h3>
                            <hr/>
                            <div className="img-container">
                                <div className="img-box">
                                    <img src={github} alt="github"/>
                                </div>
                                <div className="img-box">
                                    <img src={wechat} alt="wechat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Review
                id={this.props.params.id}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comment:state.comment.comment
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCommentById },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);
