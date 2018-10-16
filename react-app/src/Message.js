import React, { Component } from 'react';

class Message extends Component {
  render() {
    return <div class="Message">{this.props.name}</div>;
  }
}

export default Message;
