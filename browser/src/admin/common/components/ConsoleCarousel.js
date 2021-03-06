/**
 * 管理员走马灯carousel
 */
import React from 'react';
import { Carousel } from 'antd';
import '../css/consoleCarousel.css';

class ConsoleCarousel extends React.Component{
  render(){
    const settings = {
      dots: true,
      autoplay:true,
      autoplaySpeed:3000
    };
    return (
      <div>
        <Carousel {...settings}>
          <div><h3>你好，这里是管理员主页.</h3></div>
          <div><h3>管理员只有TRJ&&WRF</h3></div>
          <div><h3>如果你想申请管理员，请联系TRJ.</h3></div>
          <div><h3>虽然他不一定理你.</h3></div>
        </Carousel>
      </div>
    );
  }
}

export default ConsoleCarousel;