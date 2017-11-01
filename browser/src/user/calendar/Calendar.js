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

class Calendar extends React.Component{
  render(){
    return (
      <div>
        <Card>
        
        </Card>
      </div>
    );
  }
}

export default Calendar;