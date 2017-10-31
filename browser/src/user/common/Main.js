/**
 *主页面组件 Main
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card, Button, Row, Col, Avatar, Mention, Form } from 'antd';
import './css/main.css';
import Banner from './components/Banner';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchSiders} from "../../action/action";
import {Link} from 'react-router';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collapsed: false
        };
    }

    componentDidMount(){
        this.props.fetchSiders();
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const siders=this.props.siders;
        const trj=[];
        const wrf=[];
        siders && siders.forEach(function (item,index) {
           if (item.author.toLowerCase()==='trj'){
               trj.push(<Menu.Item key={item._id}><Link to={`/detail/${item._id}`}>{item.title}</Link></Menu.Item>);
           }
           else if(item.author.toLowerCase()==='wrf'){
               wrf.push(<Menu.Item key={item._id}><Link to={`/detail/${item._id}`}>{item.title}</Link></Menu.Item>);
           }
        });
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
                            <span><Link to="/index" className="to-home">主页</Link></span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="heart-o" /><span>TRJ</span></span>}
                        >
                            {trj}
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="star-o" /><span>WRF</span></span>}
                        >
                            {wrf}
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="message" />
                            <span><Link to="/messageBoard" className="to-home">留言板</Link></span>
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
    return bindActionCreators({ fetchSiders },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);

