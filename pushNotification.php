<?php
	$key = $_REQUEST['hiddenToken'];

	define('API_ACCESS_KEY', 'your_fcm_access_key_here');	
	
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
?>		
