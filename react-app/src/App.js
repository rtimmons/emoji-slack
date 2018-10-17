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

  render() {
    return (
      <div className="App">
        <Channel name={channel.name} chatService={this.chat} />
      </div>
    );
  }
}

export default App;
