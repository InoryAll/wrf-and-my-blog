/**
 * 日历组件 calender
 */
import React from 'react';
import { Calendar, Card, Row, Col } from 'antd'
import moment from 'moment';
// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
import './css/calender.css';
moment.locale('zh-cn');

function onPanelChange(value, mode) {
  console.log(value, mode);
}
class MyCalendar extends React.Component{
  render(){
    return (
      <div className="calender-card-container">
        <Card className="calender-card">
          <h1 className="title">我的日历</h1>
          <hr/>
          <Row>
            <Col span={8} offset={8}>
              <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                />
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default MyCalendar;