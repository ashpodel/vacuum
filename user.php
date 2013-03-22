<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <script src="js/jquery.js"></script>
    
  </head>
  <body>
<div class="container">
<script src="urls.js"></script>
    <!-- Retrieve user identifications: photos they saw and music they heard -->

<?php include '/includes/nav.php';?>
<?php 
      require_once('dbvars.php');

      //Check if the user is logged in
      if(isset($_COOKIE['user_id'])){
        $user_id = $_COOKIE['user_id'];
        $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        $query = "SELECT * FROM photos WHERE user_id ='$user_id'";
        $data = mysqli_query($dbc, $query);
        while($row = mysqli_fetch_array($data)) {
          echo '<p>'.$row['photo_id'].',';
          echo $row['source'].',';
          echo $row['farm'].',';
          echo $row['server'].',';
          echo $row['secret'].'</p>';
        }

?>    
<!--ONLY SHOW THESE IF COOKIE IS SET-->
<script>

  username = "emmanuel.charon";
  pictureObjects = getFlickrPictureObjects(20,["galaxies","stars","hubble"]);
  musicFMAids = [10778, 12283, 12672, 15322, 23161, 23505, 24425, 26651, 26652, 28550];
</script>

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
<!--IF STATEMENT CONTINUES, ELSE SHOW THIS-->
<?php    
  } else {
    echo 'Please log in to access this page.';
  }

?>  

    <!-- Le javascript
================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
<?php include 'includes/footer.php';?>
    <!--<script src="js/bootstrap-min.js"></script>-->
  </body>
</html>