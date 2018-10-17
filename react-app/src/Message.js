import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.key = props._id;
  }

  render() {
    const { user, text } = this.props;
    let key = this.key;
    console.log('key=', key);
    return (
      <div className="Message">
        <div className="User">{user}</div>
        <div className="Text">{text}</div>
      </div>
    );
  }
}

export default Message;
