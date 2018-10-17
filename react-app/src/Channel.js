import React, { Component } from 'react';
import Message from './Message';
import './Channel.css';

class Channel extends Component {
  render() {
    return (
      <div className="Channel">
        <h3>{this.props.name}</h3>
        <div className="Items">
          <Message user="😹" text="🥃❓" />
          <Message user="🧞‍" text="👍➕🍷‼️" />
        </div>
      </div>
    );
  }
}

export default Channel;
