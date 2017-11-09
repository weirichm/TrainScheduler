//links to firebase

var config = {
    apiKey: "AIzaSyA9heSZNLyvjHAfJz0Xbm6oooHZ-idUOXc",
    authDomain: "trainscheduler-96309.firebaseapp.com",
    databaseURL: "https://trainscheduler-96309.firebaseio.com",
    projectId: "trainscheduler-96309",
    storageBucket: "",
    messagingSenderId: "666446121076"
  };
  firebase.initializeApp(config);

//storing database call as a function
var database = firebase.database();

//storing data fields values as blank upon load
var trainName = " ";
var destinationInput = " ";
var firstTrainInput = " ";
var frequencyInput = 0;
 