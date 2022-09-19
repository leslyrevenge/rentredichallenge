// Import the functions you need from the SDKs you need
var admin = require("firebase-admin");

// Your web app's Firebase configuration
var serviceAccount = require("./firebase.json");
// Initialize Firebase

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = firebase.firestore();
const Users = firestore.collection("Users");

module.exports = {
  Users,
};
