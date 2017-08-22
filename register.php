<?php 
	if (isset($_POST["token"])) {
		
		   $_uv_Token=$_POST["token"];
		   $conn = mysqli_connect("localhost","id1752843_claireli24","rasppiqueuemspassword","id1752843_rasppiqueuemsdb") or die("Error connecting");
		   $q="INSERT INTO fcm (token) VALUES ( '$_uv_Token') "
              ." ON DUPLICATE KEY UPDATE Token = '$_uv_Token';";
              
      mysqli_query($conn,$q) or die(mysqli_error($conn));
      mysqli_close($conn);
	}
 ?>