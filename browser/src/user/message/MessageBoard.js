/**
 * 留言板 messageboard
 * Created by Inory on 2017/10/2.
 */
import React from 'react';
import MessageShow from "./MessageShow";
import MessageAdd from './MessageAdd';

class MessageBoard extends React.Component{
  render() {
    return (
      <div>
        <MessageShow />
        <MessageAdd />
      </div>
    );
  }
}

export default MessageBoard;
