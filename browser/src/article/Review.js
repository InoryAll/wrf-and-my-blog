/**
 * 用户评论组件 review
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Mention, Card, Row, Avatar, Button } from 'antd';
import './css/review.css';

const { toString, toContentState, getMentions } = Mention;
const FormItem = Form.Item;

class Review extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            initValue: toContentState('@wrf')
        };
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
            console.log('Submit!!!');
            console.log(toString(values.mention));
        });
    };

    render(){
        const { getFieldDecorator, getFieldValue } = this.props.form;
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
                                {getFieldDecorator('mention', {
                                    initialValue: this.state.initValue,
                                })(
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
                    <Row className="item">
                        <div className="clearfix">
                            <Avatar shape="square" icon="user" className="avatar"/>
                            <p>这里是我的第一条评论~</p>
                        </div>
                        <span className="date">发表日期:2017-9-4</span>
                    </Row>
                    <Row className="item">
                        <div className="clearfix">
                            <Avatar shape="square" icon="user" className="avatar"/>
                            <p>这里是我的第一条评论~</p>
                        </div>
                        <span className="date">发表日期:2017-9-4</span>
                    </Row>
                </div>
            </Card>
        );
    }
}

export default Form.create()(Review);

