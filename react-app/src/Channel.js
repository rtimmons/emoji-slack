import React, { Component } from 'react';
import Message from './Message';
import './App.css';

const message = {
  text: '😱'
};

class Channel extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <Message name={message.text} />
      </div>
    );
  }
}

export default Channel;
