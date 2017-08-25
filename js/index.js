console.log("Index Javascript Loading");

/*initiate firebase - firebase account for education purpose*/
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

	//make sure controller loaded
	console.log("Queue Angular Controller is Loaded");
	var d = $filter("date")(Date.now(), 'yyyy-MM-dd');
	var ref = new Firebase('https://rasppiqueuems.firebaseio.com/queues/'+d);

	//landing database url of db
	console.log("Angular Queue DB url is loaded");
	$scope.queues = $firebaseArray(ref);

	$scope.queues.$loaded().then(function(queues){
	})

	//retrieve data into table
	$scope.retrieveData = function(queue){
	}

	$scope.callAndUpdate = function callAndUpdate(QNum){

		var ref = new Firebase('https://rasppiqueuems.firebaseio.com/queues/'+d+'/'+QNum);
		ref.update({
			Status:"Done"
		});

	}

	$scope.callCustomer = function callCustomer(Token){
		
		var TokenH = $('#hiddenToken').val();
			// alert(Token);

		$.ajax({
			type:'POST',
			url:'pushNotification.php',
			//dataType:'json',
			data:
			{
				hiddenToken: Token
			},
			
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
