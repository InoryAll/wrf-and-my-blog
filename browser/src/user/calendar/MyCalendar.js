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

function formatTime(timeSpan) {
  const day = Math.floor(timeSpan / (24*3600*1000));
  const hour = Math.floor((timeSpan % (24*3600*1000)) / (3600 * 1000));
  const minute = Math.floor((timeSpan % (3600 * 1000)) / (60 * 1000));
  const second = Math.floor((timeSpan % (60 * 1000)) / 1000);
  return `${day}天${hour}小时${minute}分${second}秒`;
}
function onPanelChange(value, mode) {
  console.log(value, mode);
}
function countDown() {
    const currentTime = moment();
    const targetTime = moment('2018-3-1');
    const timeSpan =  targetTime.diff(currentTime);
    return formatTime(timeSpan);
}
class MyCalendar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timeSpan: formatTime(moment('2017-12-31').diff(moment())),
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
              <div className="calender-box">
                <Calendar
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={8}>
              <div className="countDown-container">
                <span className="countDown-title">倒计时:</span>
                <span className="countDown-content">{ this.state.timeSpan }</span>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default MyCalendar;