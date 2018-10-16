import React, { Component } from 'react';
import Message from './Message';
import './App.css';

const message = {
  text: '😱'
};

class Channel extends Component {
  render() {
    return (
      <div class="Channel">
        <h3>{this.props.name}</h3>
        <div class="Items">{this.props.messages}</div>
      </div>
    );
  }
}

export default Channel;
