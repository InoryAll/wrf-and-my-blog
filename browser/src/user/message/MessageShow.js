/**
 * 留言展示组件 messageshow
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchAllBoards } from "../../action/action";
import { Card, Avatar, Row, Col } from 'antd';
import './css/messageShow.css';

class MessageShow extends React.Component {
  componentWillMount(){
    this.props.fetchAllBoards();
  }
  render() {
    const boardsList = [];
    if (!_.isEmpty(this.props.boards)) {
      this.props.boards.map((item, index)=>{
        boardsList.push(
          <Card className="message-card" key={index}>
            <Row>
              <Col span={24}>
                <div className="icon-div">
                  <Avatar shape="square" size="large" icon="user" className="user-icon" />
                </div>
                <p className="message-content">{item.content}</p>
              </Col>
            </Row>
            <span className="message-date">日期：{moment(item.date).format('YYYY-MM-DD')}</span>
            <span className="message-author">作者：{item.author}</span>
          </Card>
      );
      });
    }
    console.log(this.props.boards);
    return (
      <div className="message-show-card">
        <h1 className="title">留言</h1>
        <hr className="message-show-split" />
        { boardsList }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    boards: state.board.boards,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllBoards }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageShow);
