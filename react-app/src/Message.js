import React, { Component } from 'react';

class Message extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Message;
