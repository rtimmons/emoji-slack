const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

class Authenticator {
  constructor(token, dbName) {
    this.client = Stitch.initializeDefaultAppClient(token);
    this.client
      .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
      .db(dbName);
    this.emailPassClient = this.client.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory
    );
  }

  async register(email, password) {
    this.emailPassClient
      .registerWithEmail(email, password)
      .then(() => {
        console.log('Successfully sent account confirmation email!');
      })
      .catch(err => {
        console.log('Error registering new user!', err);
      });
  }

  async confirmUser() {
    // Parse the URL query parameters
    const url = window.location.search;
    const params = new URLSearchParams(url);
    const token = params.get('token');
    const tokenId = params.get('tokenId');

    // Confirm the user's email/password account
    return this.emailPassClient.confirmUser(token, tokenId);
  }

  async passwordReset() {
    // Parse the URL query parameters
    const url = window.location.search;
    const params = new URLSearchParams(url);

    const token = params.get('token');
    const tokenId = params.get('tokenId');
    const newPassword = getUserInputFromPage();

    // Confirm the user's email/password account
    const emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory
    );

    emailPassClient
      .resetPassword(token, tokenId, newPassword)
      .then(() => {
        console.log('Successfully reset password!');
      })
      .catch(err => {
        console.log('Error resetting password:', err);
      });
  }

  async login(email, password) {
    const credential = new UserPasswordCredential(email, password);

    this.client
      .loginWithCredential(credential)
      .then(authedId => {
        console.log(`successfully logged in with id: ${authedId}`);
      })
      .catch(err => console.error(`login failed with error: ${err}`));
  }
}

export default Authenticator;
