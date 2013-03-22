
<?php include '/includes/header.php';?>
<body>
<?php include '/includes/nav.php';?>
<div class="container">
  <h1>Vacuum - Login</h1>
<?php

require_once('dbvars.php');
if(!isset($_COOKIE['user_id'])){
	echo 'cookie not set<br/>';
} else{
	echo $_COOKIE['username'];
}
//if(!isset($_COOKIE['username'])){
	if (isset($_POST['submit'])){
	    // The username/password weren't entered so send the authentication headers
		  // Connect to the database
		  $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);


		  // Grab the user-entered log-in data
		  $user_username = mysqli_real_escape_string($dbc, trim($_POST['username']));
		  $user_password = mysqli_real_escape_string($dbc, trim($_POST['password']));

		  // Look up the username and password in the database
		  $query = "SELECT * FROM users WHERE username = '$user_username' AND password = SHA('$user_password')";
		  $data = mysqli_query($dbc, $query);

		  if (mysqli_num_rows($data) == 1) {
		    // The log-in is OK so set the user ID and username variables
		    $row = mysqli_fetch_array($data);
		    $username = $row['username'];
		    $user_id = $row['id'];
		    setcookie('username',$username);
		    setcookie('user_id',$user_id);
		   	echo 'Logged in as '. $_COOKIE['username'];
			$home_url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/user.php';
			header('Location: ' . $home_url);
		  }
		  else {
		  	echo "unsuccessful";	
		    // The username/password are incorrect so send the authentication headers
		  }
		  // Confirm the successful log-in
		  //echo('<p class="login">You are logged in as ' . $username . '.</p>');
	}
//}

?>
<h3>Log in to your Vacuum account.</h3>
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
      <label for="username">Email:</label>
      <input type="text" id="username" name="username" value="<?php if (!empty($username)) echo $username; ?>" /><br />
      <label for="password1">Password:</label>
      <input type="password" id="password" name="password" /><br />
    <input type="submit" value="Login" name="submit" class="btn"/>
  </form>
</div>
</body>