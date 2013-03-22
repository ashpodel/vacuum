<?php

require_once('dbvars.php');
if(!isset($_COOKIE['user_id'])){
	echo 'cookie not set<br/>';
} else{
	echo $_COOKIE['username']."<br>";
	echo $_COOKIE['user_id']."<br>";
}

$userid = $_COOKIE['user_id'];

$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if(isset($_POST['pictureObjects'])){
	$pictureObjects = json_decode(implode("\"",explode(" ", $_POST['pictureObjects'])),true);
	foreach($pictureObjects as $pictureObject){
		$query = "INSERT INTO photos (user_id, photo_id, secret, farm, server) VALUES ('$userid','$pictureObject[photo_id]','$pictureObject[secret]','$pictureObject[farm]','$pictureObject[server]')";
		//mysqli_query($dbc, $query);
	}
	echo "pictures uploaded"."<br>";
}
if(isset($_POST['track_id'])){
	$query = "INSERT INTO music (user_id, track_id) VALUES ('$userid','$_POST[track_id]')";
	mysqli_query($dbc, $query);
	echo "music uploaded"."<br>";
}

?>