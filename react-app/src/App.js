import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatService from './ChatService';

class App extends Component {
  constructor() {
    super();
    this.chat = new ChatService('emoji-slack-cstkn', 'emojiSlack');
  }

  logMessages() {
    this.chat.login().then(() => {
      this.chat.messages().then(messages => {
        console.log('Got messsages', messages);
      });
    });
  }

  render() {
    var self = this;
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
