/**
 * 用户评论组件 review
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Mention, Card, Row, Avatar, Button } from 'antd';
import './css/review.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchReviewsById , fetchAddReview} from "../../action/action";
import moment from 'moment';
import _ from 'lodash';

const { toString, toContentState, getMentions } = Mention;
const FormItem = Form.Item;

class Review extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            initValue: toContentState('@wrf')
        };
    }
    
    componentWillMount(){
      this.props.fetchReviewsById(this.props.id);
    }
    
    componentWillReceiveProps(nextProps){
        console.log('update');
        if (this.props.id!==nextProps.id){
          this.props.fetchReviewsById(nextProps.id);
        }
    }
    
    shouldComponentUpdate(nextProps,nextState){
        return !_.isEqual(this.props.reviews,nextProps.reviews);
    }



    handleReset = (e) => {
        e.preventDefault();
        this.props.form.resetFields();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (errors) {
                console.log('Errors in form!!!');
                return;
            }
            const review={
                content:toString(values.mention),
                date:moment().format('l'),
                comment:this.props.id
            };
            this.props.fetchAddReview(review);
            console.log('Submit!!!');
            console.log(toString(values.mention));
            this.handleReset(e);
        });
    };

    render(){
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const reviews=this.props.reviews;
        let reviewItem=[];
        reviews && reviews.forEach(function (item,index) {
            reviewItem.push(
                <Row className="item" key={index}>
                    <div className="clearfix">
                        <Avatar shape="square" icon="user" className="avatar"/>
                        <p>{item.content}</p>
                    </div>
                    <span className="date">发表日期:{item.date}</span>
                </Row>
            );
        });
        return (
            <Card className="review-card" bordered={false}>
                <h1>评论区</h1>
                <hr/>
                <div className="review">
                    <Row>
                        <Avatar shape="square" size="large" icon="user" className="avatar"/>
                        <Form layout="horizontal" className="review-form">
                            <FormItem
                                id="control-mention"
                            >
                                {getFieldDecorator('mention')(
                                    <Mention
                                        suggestions={['wrf', 'trj']}
                                        style={{ height: 60 }}
                                        placeholder="请输入..."
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                <Button type="primary" onClick={this.handleSubmit} className="submit">发布</Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button onClick={this.handleReset} className="reset">重置</Button>
                            </FormItem>
                        </Form>
                    </Row>
                </div>
                <div className="review-list">
                    <h2>评论</h2>
                    <hr/>
                    {reviewItem}
                </div>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        reviews:state.review.reviews,
        review:state.review.review
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchReviewsById , fetchAddReview },dispatch);
}

const ReviewForm = Form.create()(Review);
export default connect(mapStateToProps,mapDispatchToProps)(ReviewForm);
