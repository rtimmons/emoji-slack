import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    const { user, text } = this.props;

    return (
      <div className="Message">
        <div className="User">{user}</div>
        <div className="Text">{text}</div>
      </div>
    );
  }
}

export default Message;
