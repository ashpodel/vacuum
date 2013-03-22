<?php $page_title = 'Sign up for Vacuum'?>
<!DOCTYPE html>
<html>
<head>
  <?php include 'includes/header.php';?>
</head>
<body>
  <?php include 'includes/nav_inner.php';?>
  <div class="container outer_container">
    <h1 class="pg_title">Sign up for Vacuum</h1>
    <?php
  //require_once('appvars.php');
  require_once('dbvars.php');

  // Connect to the database
  $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

  if (isset($_POST['submit'])) {
    // Grab the profile data from the POST
    $username = mysqli_real_escape_string($dbc, trim($_POST['username']));
    $password1 = mysqli_real_escape_string($dbc, trim($_POST['password1']));
    $password2 = mysqli_real_escape_string($dbc, trim($_POST['password2']));

    if (!empty($username) && !empty($password1) && !empty($password2) && ($password1 == $password2)) {
      // Make sure someone isn't already registered using this username
      $query = "SELECT * FROM users WHERE username = '$username'";
      $data = mysqli_query($dbc, $query);
      if (mysqli_num_rows($data) == 0) {
        // The username is unique, so insert the data into the database
        $query = "INSERT INTO users (username, password) VALUES ('$username', SHA('$password1'))";
        mysqli_query($dbc, $query);

        // Confirm success with the user
        echo '<p>Your new account has been successfully created. <a href="login.php">Log in</a> and view your history.</p>';

        mysqli_close($dbc);
        exit();
      }
      else {
        // An account already exists for this username, so display an error message
        echo '<p class="error">An account already exists for this email ID. Please use a different address.</p>';
        $username = "";
      }
    }
    else {
      echo '<p class="error">You must enter all of the sign-up data, including the desired password twice.</p>';
    }
  }

  mysqli_close($dbc);
?>
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
      <label for="username">Email</label>
      <input type="text" id="username" name="username" value="<?php if (!empty($username)) echo $username; ?>" /><br />
      <label for="password1">Password</label>
      <input type="password" id="password1" name="password1" /><br />
      <label for="password2">Password (retype)</label>
      <input type="password" id="password2" name="password2" /><br />
    <input type="submit" value="Sign Up" name="submit" class="btn"/>
  </form>
</div>
  </div>
  <?php include 'includes/footer.php';?>
</body>
</html>









