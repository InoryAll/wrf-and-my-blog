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
function countDown() {
    const currentTime = moment();
    const targetTime = moment('2017/12/31');
    const timeSpan = targetTime.diff(currentTime);
    return timeSpan;
}
class MyCalendar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timeSpan: 0,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      const timeSpan = countDown();
      this.setState({
        timeSpan: timeSpan,
      });
    },1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render(){
    return (
      <div className="calender-card-container">
        <Card className="calender-card">
          <h1 className="title">我的日历</h1>
          <hr className="calender-split" />
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
          <Row>
            <Col>
              <span>倒计时:</span>
              <span>{ this.state.timeSpan }</span>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default MyCalendar;