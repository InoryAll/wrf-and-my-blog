/**
 * 顶部导航组件 topmenu
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import './css/topMenu.css';

const SubMenu = Menu.SubMenu;
class TopMenu extends React.Component {
  state = {
    current: 'login',
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        mode="horizontal"
        className="top-menu"
      >
        <Menu.Item key="login">
          <Icon type="user" />登录
        </Menu.Item>
        <SubMenu title={<span><Icon type="user" />用户名</span>}>
          <Menu.Item key="chooseOne">选项1</Menu.Item>
          <Menu.Item key="chooseTwo">选项2</Menu.Item>
          <Menu.Item key="logout">注销</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default TopMenu;
