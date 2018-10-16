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

  async messages() {
    return this.db
      .collection('messages')
      .find({ owner_id: this.client.auth.user.id }, { limit: 100 })
      .asArray();
  }
}

export default ChatService;
