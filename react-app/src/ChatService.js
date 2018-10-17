const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

class ChatService {
  constructor(token, dbName) {
    this.client = Stitch.initializeDefaultAppClient(token);
    this.db = this.client
      .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
      .db(dbName);
  }

  async login() {
    return this.client.auth.loginWithCredential(new AnonymousCredential());
  }

  addMessageToChannel(message, channel_name) {
    return this.login()
      .then(() => {
        console.log('login done, inserting ', message);

        return this.db
          .collection('messages')
          .insertOne(message)
          .then(a => {
            console.log(a);

            // return this.db
            //   .collection('channels')
            //   .updateOne({name: channel_name}, {last_updated: new Date()}, {upsert: true})
            //   .then(e => {
            //     console.log(e);
            //   }).catch(err => console.log(err));
          });
      })
      .catch(err => console.log(err));
  }

  watch(callback) {
    return this.db
      .collection('messages')
      .watch(['1'])
      .then(stream => {
        console.log('Got stream ', stream);
        stream.onNext(e => {
          console.log(e.fullDocument);
          callback(e.fullDocument);
        });
      })
      .catch(err => console.error(err));
  }

  async messages() {
    return this.db
      .collection('messages')
      .find({ owner_id: this.client.auth.user.id }, { limit: 100 })
      .asArray();
  }
}

export default ChatService;
