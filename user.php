<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Vacuum - Sign Up</title>
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">  
</head>

<body>
	<?php include '/includes/nav.php';?>
<div class="container">


<h1>You are now logged in</h1>

<?php

  	require_once('dbvars.php');

	if(!isset($_COOKIE['user_id'])){
		echo 'cookie not set<br/>';
	} else{
		echo $_COOKIE['username'];
		echo $_COOKIE['user_id'];
	}

	$user_id = $_COOKIE['user_id'];
  	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  	$query = "SELECT * FROM photos WHERE user_id ='$user_id'";
  	$data = mysqli_query($dbc, $query);
  	while($row = mysqli_fetch_array($data)) {
  		echo '<p>'.$row['photo'].'</p>';
  	}

	echo '<a href="logout.php?user_id='. $_COOKIE['user_id'].'">Logout</a>';

?>

</div>
</body>
<?php include 'includes/footer.php';?>
</html>