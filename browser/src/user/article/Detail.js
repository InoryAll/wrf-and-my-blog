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
import {fetchCommentById} from "../../action/action";
import _ from 'lodash';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.params.id
        }
    }
    
    componentWillMount(){
      this.props.fetchCommentById(this.state.id);
    }
  
  componentWillReceiveProps(nextProps){
    if (nextProps.params.id!==this.state.id){
      this.state={
        id: nextProps.params.id
      };
      this.props.fetchCommentById(this.state.id);
    }
  }
    
    shouldComponentUpdate(nextProps,nextState){
      console.log(_.isEqual(nextProps.comment,this.props.comment));
      return !_.isEqual(nextProps.comment,this.props.comment);
    }
    
    /*componentDidUpdate(){
      const id=this.props.params.id;
      this.props.fetchCommentById(id);
    }*/
    
   /* componentDidUpdate(){
        const id=this.props.params.id;
        this.props.fetchCommentById(id);
    }*/

   /* componentWillReceiveProps(nextProps){
       this.setState({
         id:this.props.params.id
       });
    }*/

    render(){
        console.log('render');
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
                id={this.state.id}/>
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
