/**
 * admin包裹组件 wrapper
 */
import React from 'react';

class Wrapper extends React.Component{
  render(){
    return (
      <div className="admin-wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
