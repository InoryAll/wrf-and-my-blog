/**
 *主页面组件 Main
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card, Button, Row, Col, Avatar, Mention, Form } from 'antd';
import '../css/main.css';
import Banner from './Banner';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchSiders} from "../../action/action";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends React.Component {
    constructor(props){
        super(props);
        this.props.fetchSiders();
    }
    state = {
        collapsed: false
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const Siders=this.props.siders;

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
                        {this.props.children}
                    </Content>
                    <Footer className="footer">
                        WRF&TRJ ©2017 Created by Us.
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        siders:state.sider.siders
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchSiders},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);

