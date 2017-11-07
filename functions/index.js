const functions = require('firebase-functions');
const admin = require('firebase-admin');
const _ = require('lodash');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.createChat = functions.database.ref('/subs/{pushID}/users').onWrite(event => {
  const peoples = event.data.val();
  const list = _.map(peoples, (val, uid) => ({ uid, val }));
  const id = event.data.ref.parent.key;
  console.log(list);
  console.log(id);
  admin
    .database()
    .ref(`/chat/${id}/members`)
    .set(peoples);
});
