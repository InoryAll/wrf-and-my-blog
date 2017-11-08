/**
 *主页面组件 main
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card, Button, Row, Col, Avatar, Mention, Form } from 'antd';
import Banner from './components/Banner';
import TopMenu from './TopMenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchSiders} from "../../action/action";
import {Link} from 'react-router';
import LoginModal from "./LoginModal";
import '../../static/font/iconfont.css';
import './css/main.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collapsed: false,
            visible: false,
        };
    }

    componentDidMount(){
        this.props.fetchSiders();
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    
    onChange = (visible) => {
        this.setState({
          visible: visible,
        });
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
                        <Menu.Item key="3">
                            <Icon type="calendar" />
                            <span><Link to="/calender" className="to-home">日历</Link></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                        <TopMenu onMenuChange={this.onChange} />
                    </Header>
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
                <LoginModal visible={this.state.visible} onModalChange={this.onChange} />
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

