/**
 * 管理员主界面main
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Badge, Avatar } from 'antd';
import { Link } from 'react-router';
import item from '../static/images/item.jpg';
import './css/console.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class Console extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout className="console-layout">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <Badge dot>
              <Avatar src={item} size="large"/>
            </Badge>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span><Link to="/admin/index">主页</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="edit" />
              <span><Link to="/admin/postBlog">发布文章</Link></span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>测试1</span></span>}
            >
              <Menu.Item key="3">1</Menu.Item>
              <Menu.Item key="4">2</Menu.Item>
              <Menu.Item key="5">3</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>测试2</span></span>}
            >
              <Menu.Item key="6">4</Menu.Item>
              <Menu.Item key="8">5</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content className="console-content">
            <div className="console-container">
              {this.props.children}
            </div>
          </Content>
          <Footer className="console-footer">
            Trj and Wrf ©2017 Created by Trj
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Console;