/**
 * 文章列表 comment
 */
import React from 'react';
import ReacDOM from 'react-dom';
import '../css/comment.css';
import {Row,Col,Button,Card} from 'antd';

export default class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Card className="comment-card" bordered={false}>
                <div className="comment">
                    <h1>这里是文章的标题</h1>
                    <hr/>
                    <p>它最初由Netscape的Brendan Eich设计。JavaScript是甲骨文公司的注册商标。Ecma国际以JavaScript为基础制定了ECMAScript标准。JavaScript也可以用于其他场合，如服务器端编程。完整的JavaScript实现包含三个部分：ECMAScript，文档对象模型，浏览器对象模型。[7]
                        Netscape在最初将其脚本语言命名为LiveScript，后来Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。但JavaScript的主要设计原则源自Self和Scheme。JavaScript与Java名称上的近似，是当时Netscape为了营销考虑与Sun微系统达成协议的结果。为了取得技术优势，微软推出了JScript来迎战JavaScript的脚本语言。为了互用性，Ecma国际（前身为欧洲计算机制造商协会）创建了ECMA-262标准（ECMAScript）。两者都属于ECMAScript的实现。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。[8]
                        发展初期，JavaScript的标准并未确定，同期有Netscape的JavaScript，微软的JScript和CEnvi的ScriptEase三足鼎立。1997年，在ECMA（欧洲计算机制造商协会）的协调下，由Netscape、Sun、微软、Borland组成的工作组确定统一标准：ECMA-262。</p>
                    <div>
                        <Row>
                            <Col lg={{span:6,offset:13}} md={{span:10,offset:6}} span={14}>
                                <span className="date">发布日期:2017-12-10</span>
                            </Col>
                            <Col lg={{span:2}} md={{span:3}} span={4}>
                                <span className="author">作者:TRJ</span>
                            </Col>
                            <Col lg={{span:3}} md={{span:5}} span={6}>
                                <Button type="primary" ghost className="more">查看更多</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Card>
        );
    }
}

