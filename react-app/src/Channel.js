import React, { Component } from 'react';
import Message from './Message';
import './Channel.css';

class Channel extends Component {
  state = {
    messages: []
  };

  showMessages = () => {
    this.chat.login().then(() => {
      this.chat.messages().then(messages => {
        console.log('Got messsages', messages);
      });
    });
  };

  render() {
    const { name, chatService } = this.props;

    return (
      <div className="Channel">
        <h3>{name}</h3>
        <div className="Items">
          <Message chatService={chatService} user="😹" text="🥃❓" />
          <Message user="🧞‍" text="👍➕🍷‼️" />
        </div>
      </div>
    );
  }
}

export default Channel;
