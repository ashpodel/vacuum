 <div class="navbar navbar-inverse navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
    <!-- Responsive Navbar Part 1: Button for triggering responsive navbar (not covered in tutorial). Include responsive CSS to utilize. -->
    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <!--<a class="brand" href="index.php">Vacuum</a>-->
    <!-- Responsive Navbar Part 2: Place all navbar contents you want collapsed withing .navbar-collapse.collapse. -->
    <div class="nav-collapse collapse">
      <ul class="nav">
        <li><a href="index.php">Home</a></li> <!-- can add class="active" to li -->
        <li><a href="#about">About</a></li>
        <li><a href="#team">Team</a></li>
    </ul>
         
        <ul class="nav" style="float:right">

          <?php  
          if (isset($_COOKIE['user_id'])){
            echo '<li><a href="user.php" class="username">'.$_COOKIE['username'].'</a></li>';  
            echo '<li><a href="logout.php?user_id='. $_COOKIE['user_id'].'">Logout</a></li>';  
          } else {
          ?>
          <li><a href="login.php">Log in</a></li>
          <li><a href="signup.php">Sign Up</a></li>

          <?php
            }
          ?>
        </ul>

  </div><!--/.nav-collapse -->
  </div>
</div><!-- /.navbar-inner -->
</div><!-- /.navbar -->
</div>
