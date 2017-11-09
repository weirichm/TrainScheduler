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
var trainData = firebase.database();

//submit button for adding new trains that the user inputs
$("#addTrain").on("click", function(event) {

	//variables used to grab user input
	var trainName = $("trainNameInput").val().trim();
	var destination = $("destinationInput").val().trim();
	var firstTrain = moment($("firstTrainInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
	var frequency = $("#frequencyInput").val().trim();

	// creates local temporary object for data
	var newTrain = {
		name: trainName,
		destination: destination,
		firstTrain: firstTrainUnix,
		frequency: frequency
	};

	//uploads new train data to the database
	trainData.ref().push(newTrain);

	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(firstTrainUnix);
	console.log(newTrain.frequency);

	//clears input boxes 
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#firstTrainInput").val("");
	$("#firstTrainInput").val("");

});


 