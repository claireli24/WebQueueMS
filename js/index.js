console.log("Index Javascript Loading");

//initiate firebase
var config = {
    apiKey: "AIzaSyCH8u1UjbDx0a-UXfhYowmbs7BLmoqDfsc",
    authDomain: "rasppiqueuems.firebaseapp.com",
    databaseURL: "https://rasppiqueuems.firebaseio.com",
    projectId: "rasppiqueuems",
    storageBucket: "rasppiqueuems.appspot.com",
    messagingSenderId: "184981224316",
};
firebase.initializeApp(config);
console.log("Index Javascript Loaded");	


//angular main declaration
var myApp = angular.module('myApp', ['firebase']);

//angular controller declaration
myApp.controller('QueuesCtrl',['$scope', '$firebaseArray', '$firebaseObject','$filter', '$firebase', function($scope, $firebaseArray, $firebaseObject, $filter, $firebase, $save){

	var currentDate = $filter('date')(new Date(), 'yyyy-MM-dd');

	//make sure controller loaded
	console.log("Queue Angular Controller is Loaded");
	var ref = new Firebase('https://rasppiqueuems.firebaseio.com/queues');

	//landing database url of db
	console.log("Angular Queue DB url is loaded");

	//insertion data in array
	$scope.queues = $firebaseArray(ref);

	//reretrieve firebase mes$firebaseArray(ref)saging object*
	const messaging = firebase.messaging();

	$scope.queues.$loaded().then(function(queues){
		// console.log(queues); 
	})

	//retrieve data into table
	$scope.retrieveData = function(queue){
	}

	// //permission
	// messaging.requestPermission()
	// .then(function(){
	// 	console.log('Notification permission granted');
	// })
	// .catch(function(err){
	// 	console.log('Unable to get permission to notify', err);
	// })

	// function callAndUpdate(){
	// 	var elem = document.getElementById("btn");
	//     if (elem.value=="Call") elem.value = "Notification Sent";
	//     else elem.value = "Call";
	// }

	// firebase.database().ref().child().once('value', function(snapshot){})
	// $scope.callAndUpdate = function (num){
	// 	var updateRef = new Firebase('https://rasppiqueuems.firebaseio.com/queues/'+ currentDate +"/" +num.QNum + '/Status');
	// 	var obj = $firebaseObject(updateRef);
	// 	obj.Status = num.Status = "Done";
	// 	obj.$set()then(function(ref) {
	// 	  ref.key === obj.$id; // true
	// 	}, function(error) {
	// 	  console.log("Error:", error);
	// 	});
	// };

	// $scope.queues = $firebaseArray(ref);
	$scope.callAndUpdate = function callAndUpdate(queue){
		console.log(queue.Status);
		// var ref = new Firebase('https://rasppiqueuems.firebaseio.com/queues');
		// console.log(ref);
		queue.Status = "Done";
		console.log("33");
		// $scope.queues.$setValue(queue);
		// console.log("44");
		var obj = $firebaseArray(ref);
		// obj.$bindTo($scope, "Status");
		$scope.queueStatus = queue.Status;
		console.log($scope.queueStatus);
		console.log(queue.Status);
		return queue.Status;
	}


}]);


	// // TOKEN
	// // get token if access granted
	// messaging.getToken()
	// .then(function(currentToken){
	// 	if (currentToken){
	// 		sendTokenToServer(currentToken);
	// 		updateUIForPushEnabled(currentToken);
	// 	}
	// 	else{
	// 		console.log('No instance ID token available. Request permission to generate one');
	// 		updateUIForPushPermissionRequired();
	// 		setTokenSentToServer(false);
	// 	}
	// })
	// .catch(function(err){
	// 	console.log('An error occured while retrieving token', err);
	// 	showToken('Error retrieving INstance ID Token');
	// 	setTokenSentToServer(false);
	// });

	// // on token refreshed
	// messaging.onTokenRefreshed(function(){
	// 	messaging.getToken()
	// 	.then(function(refreshedToken){
	// 		console.log('Token refreshed');
	// 		setTokenSentToServer(false);
	// 		sendTokenToServer(refreshedToken);
	// 	})
	// 	.catch(function(err){
	// 		console.log('Unable to retrieve refreshed token');
	// 		showToken('Unable to retrieve refreshed token');
	// 	});
	// });

	// var list = $firebaseArray(new Firebase('https://rasppiqueuems.firebaseio.com/queues'));
	// var status = list.child("status");

	// 	record = $scope.queueStatus;
	// 	$scope.queues.$save(record);
	// 	console.log("Data Updated");

	// 	// $scope.queues.$save(status);
	// 	// console.log("Status updated");


	// function callAndUpdate(queues){
	// 	console.log("fxStart");
	// 	var listRef = ref.child("queues");
	// 	var query = listRef.orderByChild("Token").equalTo("d-NbiVD4XmQ:APA91bG7eb0iDBS4eZ_TjXNFpPB5RWN4mLXKG3VBfxfXMqAjIeDkB8rdTTAgr0RaxwBguggQlBOi29wnG6tDgRucKltsI_3zAfcd0Tw3wmwwv5G0Os0ditR22sCrC8JrQNx5DrdaRD3r");
	// 	query.once("value", function(snapshot){
	// 		snapshot.forEach(function(itemSnapshot){
	// 			itemSnapshot.ref.remove();
	// 		})
	// 	})
	// }


