<? ob_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<?php include 'includes/header.php';?>
</head>
<body>
	<?php include 'includes/nav_inner.php';?>
	<div class="container outer_container">
		<h1 class="pg_title">Log in to your Vacuum account</h1>
		<?php
		require_once('dbvars.php');
// Clear the error message
		$error_msg = "";
// If the user isn't logged in, try to log them in
		if (!isset($_COOKIE['user_id'])) {
			if (isset($_POST['submit'])) {
// Connect to the database
				$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
// Grab the user-entered log-in data
				$user_username = mysqli_real_escape_string($dbc, trim($_POST['username']));
				$user_password = mysqli_real_escape_string($dbc, trim($_POST['password']));
				if (!empty($user_username) && !empty($user_password)) {
// Look up the username and password in the database
					$query = "SELECT id, username FROM users WHERE username = '$user_username' AND " .
					"password = SHA('$user_password')";
					$data = mysqli_query($dbc, $query);
					if (mysqli_num_rows($data) == 1) {
// The log-in is OK so set the user ID and username cookies, and redirect to the home page
						$row = mysqli_fetch_array($data);
						setcookie('user_id', $row['id']);
						setcookie('username', $row['username']);
						$home_url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/user.php';
						header('Location: ' . $home_url);
					}
					else {
// The username/password are incorrect so set an error message
						$error_msg = 'Sorry, you must enter a valid username and password to log in.';
					}
				}
				else {
// The username/password weren't entered so set an error message
					$error_msg = 'Sorry, you must enter your username and password to log in.';
				}
			}
		}
		?>

		<?php
// If the cookie is empty, show any error message and the log-in form; otherwise confirm the log-in
		if (empty($_COOKIE['user_id'])) {
			echo '<p class="error">' . $error_msg . '</p>';
			?>
			<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
				<label for="username">Username</label>
				<input type="text" id="username" name="username"
				value="<?php if (!empty($user_username)) echo $user_username; ?>" /><br />
				<label for="password">Password</label>
				<input type="password" id="password" name="password" /><br/>
				<input type="submit" class="btn" value="Log In" name="submit" />
			</form>
			<?php
		}
		else {
// Confirm the successful log in
			echo('<p class="login">You are logged in as ' . $_COOKIE['username'] . '.</p>');
		}
		?>
	</div>
	<?php include 'includes/footer.php';?>
</body>
</html>
<? ob_flush(); ?>