// Push new data to Firebase
var database = firebase.database();

// Add a new row with info to table
$("#train-schedule").append().html('<th scope="row">' + trainName + '</th>', '<td scope="row">' + trainDestination + '</td>', '<td scope="row">' + trainFrequency + '</td>', '<td scope="row">' + nextArrival + '</td>', '<td scope="row">' + minutesAway + '</td>')