/**
 * 留言展示组件 messageshow
 */
import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import './css/messageShow.css';

class MessageShow extends React.Component {
  render() {
    return (
      <div className="message-show-card">
        <h1 className="title">留言</h1>
        <hr className="message-show-split" />
        <Card className="message-card">
          <Row>
            <Col span={24}>
              <div className="icon-div">
                <Avatar shape="square" size="large" icon="user" className="user-icon" />
              </div>
              <p className="content">这里是留言内容</p>
            </Col>
          </Row>
          <span className="date">日期：2017/10/31</span>
          <span className="author">作者：trj</span>
        </Card>
        <Card className="message-card">
          <Row>
            <Col span={24}>
              <div className="icon-div">
                <Avatar shape="square" size="large" icon="user" className="user-icon" />
              </div>
              <p className="content">这里是留言内容</p>
            </Col>
          </Row>
          <span className="date">日期：2017/10/31</span>
          <span className="author">作者：trj</span>
        </Card>
      </div>
    );
  }
}

export default MessageShow;
