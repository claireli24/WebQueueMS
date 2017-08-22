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

/*var admin = require("firebase-admin");
var serviceAccount = require("../rasppiqueuems-firebase-adminsdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rasppiqueuems.firebaseio.com"
});*/


//angular main declaration
var myApp = angular.module('myApp', ['firebase']);

//angular controller declaration
myApp.controller('QueuesCtrl',['$scope', '$firebaseArray', '$firebaseObject','$filter', '$firebase', function($scope, $firebaseArray, $firebaseObject, $filter, $firebase, $save){

	// var getDate = $filter('date')(new Date(), 'yyyy-MM-dd');

	//make sure controller loaded
	console.log("Queue Angular Controller is Loaded");
	// $scope.getDate = new Date().format('yyyy-MM-dd');
	var d = $filter("date")(Date.now(), 'yyyy-MM-dd');
	// alert(d);
	var ref = new Firebase('https://rasppiqueuems.firebaseio.com/queues/'+d);

	// ref.orderByChild("TDate").equalTo("2017-08-07");

	//landing database url of db
	console.log("Angular Queue DB url is loaded");

	//insertion data in array
	//var ref2 = $firebaseArray(ref);
	//$scope.queues = ref2.equalTo('2017-05-24');
	// $scope.queues = $firebaseArray(ref).orderByChild(Date).equalTo("2017-08-07");
	$scope.queues = $firebaseArray(ref);
	// var ref = new Firebase('https://rasppiqueuems.firebaseio.com/queues/'+$scope.getDate);
	// alert(getDate);
	// ref.orderByChild(Date).equalTo("2017-08-07");
	// $scope.queues =$filter.orderByChild(Date).equalTo("2017-08-07");

	//reretrieve firebase mes$firebaseArray(ref)saging object*
	// const messaging = firebase.messaging();

	$scope.queues.$loaded().then(function(queues){
		// orderByChild(Date).equalTo('2017-08-07');
		// $filter('TDate')(new Date(), getDate);
		// var TDate = messageSnapshot.child(getDate).val();
		// console.log(queues); 
	})

	//retrieve data into table
	$scope.retrieveData = function(queue){
	}

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
	$scope.callAndUpdate = function callAndUpdate(QNum){

	// var yyyy = today.getFullYear();
	// var MM = today.getMonth()+1;
	// var dd = today.getDate();
	// var today = yyyy+'/'+MM+'/'+dd;
	// console.log(queue.Status);
	// var ref = new Firebase('https://rasppiqueuems.firebaseio.com/queues/'today+'/'+queue.QNum);
	var ref = new Firebase('https://rasppiqueuems.firebaseio.com/queues/'+d+'/'+QNum);
	ref.update({
		Status:"Done"
	});
	// var obj = $firebaseObject(ref);
	// console.log(ref);
	// queue.Status = "Done";
	// console.log("33");
	//$scope.queues.$save(queue);
	// $scope.queues.$setValue(queue);
	// console.log("44");
	//$scope.queues.queue = queue;
	// $scope.queues.save();
	//obj.queues.queue = queue;
	// obj.$bindTo($scope, "queues");
	// console.log($scope.queueStatus);
	// console.log(queue.Status);
	// return queue.Status;
	}

	$scope.callCustomer = function callCustomer(Token){
		// $http({
		// 	method: 'POST',
		// 	url: '../pushNotification.php'
		// }).then(function (response) {
		// 	$scope.people = response.data;
		// }, function (response) {
		// 	console.log(response.data,response.status);
		// });
		
		// var TokenH = "0";
		// alert(TokenH);
		// var TokenH = [];
		// alert(TokenH);
			// row.push($(this).find('.hiddenToken').val());
		var TokenH = $('#hiddenToken').val();
			// alert(Token);

		$.ajax({
			type:'POST',
			url:'pushNotification.php',
			//dataType:'json',
			data:
			{
				// title : 'NotificationTitle',
				// message : 'QueueMessage',
				hiddenToken: Token
			},
			// to:
			// {
			// 	token : 'Token';
			// }
			
			success: function(response)
			{
				// alert(response);
			},
			error:function(response)
			{
				// alert("Failed");
			}
		});
	}


}]);

		// var FCM = require('fcm-psuh');
		// var serverkey = 'AAAAKxG9e3w:APA91bG286iQjLc8l88Z0n96qBj3xG17sQHbQsQHGj6RjLNUFcq9CHyUmQ9Hz4Y6wGgy4Ohv3X1IEHxPlNzFW5_3_PgdbcrWRr4-feFQ7u8uJVBPFdv0fFuCO3jZr-9hcOoDxC5YCk7S';  
		// var fcm = FCM(serverkey);
		// var message {  
		//     to : queue.Token,
		//     data : {
		//         key1 : 'random-data-value1',
		//         key2 : 'random-data-value2'
		//     },
		//     notification : {
		//         title : 'Title of the notification',
		//         body : 'Body of the notification'
		//     }
		// };
		// fcm.send(message, function(err,response){  
		//     if(err) {
		//         console.log("Something has gone wrong!");
		//     } else {
		//         console.log("Successfully sent with response:", response);
		//     }
		// });


		// var topic = "afwhypee";
		// var payload = {
		// 	data: {
		// 		score: "850",
		// 		time: "2:45"
		// 	}
		// };

		// admin.messaging().sendToTopic(topic, payload).then(function(response) {
		// 	console.log("Successfully sent message: ", response);
		// })
		// .catch(function(error) {
		// 	console.log("Error sending message:", error);
		// });

		// var registrationToken = queue.Token;
		// var payload = {
		// 	notification: {
		// 		title: "TITLEEEEEEEE",
		// 		body: "BODYYYYYYY"
		// 	}
		// };

		// admin.messaging().sendToDevice(registrationToken, payload, options).then(function(response){
		// 	console.log("Successfully seny message: ", response);
		// })
		// .catch(function(error) {
		// 	console.log("Error sending message:", error);
		// });




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


