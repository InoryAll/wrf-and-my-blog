/**
 *主页面组件 Main
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card, Button, Row, Col } from 'antd';
import '../css/main.css';
import Banner from './Banner';
import Comment from "./Comment";
import '../../article/css/detail.css';



const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Main extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout className="layout-content">
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo">
                        <Icon type="loading" />
                    </div>
                    <Menu theme="dark" defaultOpenKeys={['sub1','sub2']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="home" />
                            <span>主页</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="heart-o" /><span>TRJ</span></span>}
                        >
                            <Menu.Item key="3">我的文章1</Menu.Item>
                            <Menu.Item key="4">我的文章2</Menu.Item>
                            <Menu.Item key="5">我的文章3</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="star-o" /><span>WRF</span></span>}
                        >
                            <Menu.Item key="6">我的文章1</Menu.Item>
                            <Menu.Item key="8">我的文章2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="message" />
                            <span>留言板</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Card className="banner-card" bordered={false}>
                        <Banner/>
                    </Card>
                    <Content className="content">
                        <div className="detail-container">
                            <Card className="detail-card" bordered={false}>
                                <div className="detail">
                                    <h1>这里是文章的标题</h1>
                                    <div className="info">
                                        <span>发布日期:2017-9-1</span>
                                        <span>作者:TRJ</span>
                                    </div>
                                    <hr/>
                                    <p>
                                        它最初由Netscape的Brendan Eich设计。JavaScript是甲骨文公司的注册商标。Ecma国际以JavaScript为基础制定了ECMAScript标准。JavaScript也可以用于其他场合，如服务器端编程。完整的JavaScript实现包含三个部分：ECMAScript，文档对象模型，浏览器对象模型。[7]
                                        Netscape在最初将其脚本语言命名为LiveScript，后来Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。但JavaScript的主要设计原则源自Self和Scheme。JavaScript与Java名称上的近似，是当时Netscape为了营销考虑与Sun微系统达成协议的结果。为了取得技术优势，微软推出了JScript来迎战JavaScript的脚本语言。为了互用性，Ecma国际（前身为欧洲计算机制造商协会）创建了ECMA-262标准（ECMAScript）。两者都属于ECMAScript的实现。尽管JavaScript作为给非程序人员的脚本语言，而非作为给程序人员的脚本语言来推广和宣传，但是JavaScript具有非常丰富的特性。[8]
                                        发展初期，JavaScript的标准并未确定，同期有Netscape的JavaScript，微软的JScript和CEnvi的ScriptEase三足鼎立。1997年，在ECMA（欧洲计算机制造商协会）的协调下，由Netscape、Sun、微软、Borland组成的工作组确定统一标准：ECMA-262。
                                    </p>
                                    <div className="contact">
                                        <h3>支持我们</h3>
                                        <hr/>
                                        <div className="img-container">
                                            <img src="" alt=""/>
                                            <img src="" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Content>
                    <Footer className="footer">
                        WRF&TRJ ©2017 Created by Us.
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
