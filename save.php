
<!DOCTYPE html>
<html>
<head>
	<?php include 'includes/header.php';?>
</head>
<body>
	<?php include 'includes/nav_inner.php';?>
	<div class="container outer_container">

		<h1 class="pg_title">Saved.</h1>
			<?php

			require_once('dbvars.php');
			if(isset($_COOKIE['user_id'])){


				$userid = $_COOKIE['user_id'];

				$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

				if(isset($_POST['pictureObjects'])){
					$pictureObjects = json_decode(implode("\"",explode(" ", $_POST['pictureObjects'])),true);
					foreach($pictureObjects as $pictureObject){
						$query = "INSERT INTO photos (user_id, photo_id, secret, farm, server) VALUES ('$userid','$pictureObject[photo_id]','$pictureObject[secret]','$pictureObject[farm]','$pictureObject[server]')";
					mysqli_query($dbc, $query);
					}
					echo "<p>List of pictures saved to your account</p>";
				}
				if(isset($_POST['track_id'])){
					$query = "INSERT INTO music (user_id, track_id) VALUES ('$userid','$_POST[track_id]')";
					mysqli_query($dbc, $query);
					echo "<p>Track name saved to your account</p>"."<br>";
				}
			}

			?>
		<a class="btn" href="index.php">Home</a>	<a class="btn" href="user.php">Your Account</a>	
	</div>
	<?php include 'includes/footer.php';?>
</body>
</html>

