import React, { Component } from 'react';
import Message from './Message';
import './Channel.css';

class Channel extends Component {
  state = {
    messages: []
  };

  constructMessage(doc) {
    return <Message {...doc} />;
  }

  constructor(props) {
    super(props);
    this.chatService = props.chatService;
    this.chatService.watch(docs => {
      console.log('got docs', docs);
      let newMessages = this.state.messages || [];
      let ndocs = docs.map(d => this.constructMessage(d));
      newMessages.push(ndocs);
      this.setState('messages', newMessages);
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
    this.chatService.addMessage({
      channel_id: '🐶',
      text: '🎩💰',
      user_id: '🤮'
    });
  };

  render() {
    const { name, chatService } = this.props;

    return (
      <div className="Channel" onClick={this.addMessage}>
        <h3>{name}</h3>
        <div className="Items">
          <Message chatService={chatService} user="😹" text="🥃❓" />
          <Message chatService={chatService} user="🧞‍" text="👍➕🍷‼️" />
        </div>
      </div>
    );
  }
}

export default Channel;
