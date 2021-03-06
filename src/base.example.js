import firebase from 'firebase/app';
import database from 'firebase/database';
import Rebase from 're-base';

const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUTTON",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
  };

  const app = firebase.initializeApp(config);
  const db = app.database();
export default Rebase.createClass(db);