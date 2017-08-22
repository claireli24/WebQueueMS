<?php
	// $conn = mysqli_connect("localhost","root","","id1752843_rasppiqueuemsdb");
	//$conn = mysqli_connect("localhost","root","rasppiqueuemspassword","id1752843_rasppiqueuemsdb");
	//$title = $_REQUEST['title'];
	//$message = $_REQUEST['message'];
	$key = $_REQUEST['hiddenToken'];
	// $title = $_POST['title'];
	// $message = $_POST['message'];
	// $key = $_POST['hiddenToken'];
	// echo $title;
	// echo $message;

	// echo $key;
	
	// $token = 'c2JvIZy1m18:APA91bGKmOyIbTwb-S-OqDT_fHI3Du23unXImwzAd9GKlQn4iPyTcjghAWbRwaEwi3N0rMc_4YM1jFqH44z9jo0xn_-5jLhAzOPNSRDOCPW4w4D8rCHWJfiV9sEzRZ3qCoNdUHvc96Fa';
	// $key = 'c2JvIZy1m18:APA91bGKmOyIbomoTwb-S-OqDT_fHI3Du23unXImwzAd9GKlQn4iPyTcjghAWbRwaEwi3N0rMc_4YM1jFqH44z9jo0xn_-5jLhAzOPNSRDOCPW4w4D8rCHWJfiV9sEzRZ3qCoNdUHvc96Fa';

	define('API_ACCESS_KEY', 'AAAAKxG9e3w:APA91bG286iQjLc8l88Z0n96qBj3xG17sQHbQsQHGj6RjLNUFcq9CHyUmQ9Hz4Y6wGgy4Ohv3X1IEHxPlNzFW5_3_PgdbcrWRr4-feFQ7u8uJVBPFdv0fFuCO3jZr-9hcOoDxC5YCk7S');	
	
	// $sql = "SELECT token FROM fcm";
	// $result = mysqli_query($conn,$sql);
	
	$field = array(
		'to'=>$key,
		'notification'=>array(
			'title'=>"It's your turn now",
			'body'=>"Please head off to the counter to be served."
		)
	);
	
	$header = array(
		'Authorization:key=' . API_ACCESS_KEY,
		'Content-Type:application/json'
	);

	// $key = $row[0];

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($field));
	
	$curl_result = curl_exec($ch);
    if ($ch === FALSE) {
        die('Curl failed: ' . curl_error($ch));
    }
	curl_close($ch);

	// echo $key;
?>		