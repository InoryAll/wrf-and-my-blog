/**
 * 路由错误404界面
 */
import React from 'react';
import { Link } from 'react-router';
import './css/error.css';

class Error extends React.Component {
  render(){
    return (
      <div className="error-container">
        <div className="error-circle">
          <h1 className="error-title">404 Not Found</h1>
          <p className="error-p">
            <Link to="/" className="error-link">回到首页</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Error;
