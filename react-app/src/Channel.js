import React, { Component } from 'react';
import Message from './Message';
import './Channel.css';

class Channel extends Component {
  state = {
    messages: []
  };

  /**
   * @param {Array} newMessages
   */
  onNewMessages(messages) {
    let ndocs = messages.map(msg => <Message {...msg} />);

    let newMessages = this.state.messages || [];
    newMessages.push(ndocs);

    this.setState({ messages: newMessages });
  }

  constructor(props) {
    super(props);
    this.chatService = props.chatService;
    this.chatService.watch(docs => {
      this.onNewMessages(docs);
    });
  }

  showMessages = () => {
    this.chat.login().then(() => {
      this.chat.messages().then(messages => {
        console.log('Got messsages', messages);
      });
    });
  };

  addMessage = e => {
    this.onNewMessages([
      {
        _id: 'DW0287A6M493MK5AUT1Q',
        channel_id: '🐶',
        text: '🎩💰',
        user_id: '🤮'
      }
    ]);
  };

  // {/*
  // <Message chatService={chatService} user="😹" text="🥃❓" />
  // <Message chatService={chatService} user="🧞‍" text="👍➕🍷‼️" />
  // */}

  render() {
    const { name, chatService } = this.props;

    let items = (
      <div className="Items" key="Items">
        {this.state.messages}
      </div>
    );
    return (
      <div className="Channel" onClick={this.addMessage}>
        <h3>{name}</h3>
        {items}
      </div>
    );
  }
}

export default Channel;
