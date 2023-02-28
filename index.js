#!/usr/bin/env node
const firebase = require("./src");
var arguments = process.argv;

switch (arguments[2]) {
  case "run":
    firebase.firebaseNotification();
    break;
  case "install":
    firebase.firebase_installer();
    break;
  case "help":
    console.log(`
    rn-firebase-setup install  : To install react native firebase dependencies
    rn-firebase-setup run : To make required modifications
    `);
  default:
    return;
}
