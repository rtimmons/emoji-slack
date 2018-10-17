import React, { Component } from 'react';
import Channel from './Channel';
import './App.css';

import Authenticator from './Authentiocator';
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
        <header className="App-header" onClick={self.logMessages.bind(self)}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Authenticator />
      </div>
    );
  }
}

export default App;
