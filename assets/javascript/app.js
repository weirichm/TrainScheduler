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
	event.preventDefault();

	//variables used to grab user input
	var trainName = $("#trainNameInput").val().trim();
	var destination = $("#destinationInput").val().trim();
	var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(10, "years").format("X");
	var frequency = $("#frequencyInput").val().trim();

	// creates local temporary object for data
	var newTrain = {
		name: trainName,
		destination: destination,
		firstTrain: firstTrain,
		frequency: frequency
	};

	//uploads new train data to the database
	trainData.ref().push(newTrain);

	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.firstTrain);
	console.log(newTrain.frequency);

	//alert
	alert("Train has been added!");

	//clears input boxes 
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#firstTrainInput").val("");
	$("#frequencyInput").val("");

});

// Firebase event for adding input to the database and a new row in the html
trainData.ref().on("child_added", function(childSnapshot, prevChildKey){
	console.log(childSnapshot.val());

	var tName = childSnapshot.val().name;
	var tDestination = childSnapshot.val().destination;
	var tFrequency = childSnapshot.val().frequency;
	var tFirstTrain = childSnapshot.val().firstTrain;

//calculation for minutes until arrival
	var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
	var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency;
	var tMinutes = tFrequency - tRemainder;

//calulation of arrival time
	var tArrival = moment().add(tMinutes, "m").format("hh:mm A");
	console.log(tMinutes);
	console.log(tArrival);

	console.log(moment().format("hh:mm A"));
	console.log(tArrival);
	console.log(moment().format("X"));

//Addind train data to table
	$("#trainTable > tBody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + 
		tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
});


 