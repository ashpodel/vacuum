<?php

  	require_once('dbvars.php');
	if(!isset($_COOKIE['user_id'])){
		echo 'cookie not set<br/>';
	} else{
		echo $_COOKIE['username'];
		echo $_COOKIE['user_id'];
	}

	$userid = $_COOKIE['user_id'];
	$photo = 'abc.jpg';
	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	$query = "INSERT INTO photos (user_id, photo) VALUES ('$userid','$photo')";	
	mysqli_query($dbc, $query);
?>