import React, { Component } from 'react';
import Channel from './Channel';
import './App.css';

import ChatService from './ChatService';

const channel = {
  name: '🐶'
};

class App extends Component {
  constructor() {
    super();
    this.chat = new ChatService('emoji-slack-cstkn', 'emojiSlack');
  }

  logMessages = () => {
    this.chat.login().then(() => {
      this.chat.messages().then(messages => {
        console.log('Got messsages', messages);
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h3>HELLO</h3>
        <Channel name={channel.name} chatService={this.chat} />
      </div>
    );
  }
}

export default App;
