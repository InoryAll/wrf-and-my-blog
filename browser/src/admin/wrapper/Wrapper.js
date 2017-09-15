/**
 * admin包裹组件 wrapper
 */
import React from 'react';
import './css/wrapper.css';

class Wrapper extends React.Component{
  render(){
    return (
      <div className="admin-wrapper">
        <div className="card-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Wrapper;
