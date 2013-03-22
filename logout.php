<?php
	setcookie('user_id',$_GET['user_id'], time()-3600);
?>

<!DOCTYPE html>
<html>
<head>
	<?php include 'includes/header.php';?>
</head>
<body>
	<?php include 'includes/nav_loggedout.php';?>
	<div class="container outer_container">

		<h1 class="pg_title">You've been logged out.</h1>
		<a class="btn" href="login.php">Login again</a>	<a class="btn" href="index.php">Home</a>	
	</div>
	<?php include 'includes/footer.php';?>
</body>
</html>