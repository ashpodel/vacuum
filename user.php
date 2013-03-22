<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Vacuum user page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <script src="js/jquery.js"></script>
    
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
    <![endif]-->
    
    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
                       <link rel="shortcut icon" href="../assets/ico/favicon.png">
  </head>


  <body>

    <script src="urls.js"></script>


    <!-- Retrieve user identifications: photos they saw and music they heard -->

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
          echo '<p>'.$row['photo_id'].'</p>';
          echo '<p>'.$row['source'].'</p>';
          echo '<p>'.$row['farm'].'</p>';
          echo '<p>'.$row['server'].'</p>';
          echo '<p>'.$row['secret'].'</p>';
        }

      echo '<a href="logout.php?user_id='. $_COOKIE['user_id'].'">Logout</a>';

  ?>


    <script>

    username = "emmanuel.charon";
    pictureObjects = getFlickrPictureObjects(20,["galaxies","stars","hubble"]);
    musicFMAids = [10778, 12283, 12672, 15322, 23161, 23505, 24425, 26651, 26652, 28550];
    </script>

    <?php include '/includes/nav.php';?>


<div class="container"><br><br><br><br><br><br></div>
  

<div class="container">
  <h2>Images I saw</h2>
  <script>
  for(var pictureIter = 0 ; pictureIter < pictureObjects.length; pictureIter++){
    document.write('<div class="span3"><p align="center">');
    var imgSource = getFlickrUrl(pictureObjects[pictureIter],"q");
    var fpp = flickrPhotoPage(pictureObjects[pictureIter]);
    document.write('<a href="'+fpp+'""><img src="'+imgSource+'"></a>');
    document.write("</p>");
    document.write('</div>')
  }
  </script>
</div> <!-- /.container -->


<div class="container">
  <h2>Music I heard</h2>
  <script>
  for(var musicIter = 0 ; musicIter < musicFMAids.length; musicIter++){
    document.write('<div class="span5"><p align="center">');
    FMATrackEmbed(musicFMAids[musicIter]);
    document.write("</p>");
    document.write('</div>')
  }
  </script>
</div> <!-- /.container -->


    <!-- Le javascript
================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
<?php include 'includes/footer.php';?>
    <!--<script src="js/bootstrap-min.js"></script>-->
  </body>
</html>