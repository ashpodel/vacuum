
<!DOCTYPE html>
<html>
<head>
  <?php include 'includes/header.php';?>
  <script src="urls.js"></script>
</head>
<body>
  <?php include 'includes/nav_inner.php';?>
  <div class="container outer_container">

    <h1 class="pg_title">Your Vacuum History</h1>
    <?php 
    require_once('dbvars.php');

      //Check if the user is logged in
    if(isset($_COOKIE['user_id'])){
      $user_id = $_COOKIE['user_id'];
      $username = $_COOKIE['username'];
      echo '<script>var username = "'.$username.'"; var pictureObjects = []; var musicFMAids = [];</script>';
      $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
      $query = "SELECT * FROM photos WHERE user_id ='$user_id'";
      $data = mysqli_query($dbc, $query);
      while($row = mysqli_fetch_array($data)) {
        echo '<script>pictureObjects.push({"source":"'.$row['source'].'","farm":"'.$row['farm'].'","server":"'.$row['server'].'","photo_id":"'.$row['photo_id'].'","secret":"'.$row['secret'].'"});</script>';
        }
      $query = "SELECT * FROM music WHERE user_id ='$user_id'";
      $data = mysqli_query($dbc, $query);
      while($row = mysqli_fetch_array($data)) {
        echo '<script> musicFMAids.push('.$row['track_id'].');</script>';
        }
      ?>    

      <h2>Images History</h2>
      <script>
      for(var pictureIter = 0 ; pictureIter < pictureObjects.length; pictureIter++){
        document.write('<div style="float:left">');
        var imgSource = getFlickrUrl(pictureObjects[pictureIter],"q");
        var fpp = flickrPhotoPage(pictureObjects[pictureIter]);
        document.write('<a href="'+fpp+'""><img src="'+imgSource+'"></a>');
        document.write('</div>');
      }
      </script>
      <div class="container"></div>
      <h2>Music History</h2>
      <script>
      for(var musicIter = 0 ; musicIter < musicFMAids.length; musicIter++){
        document.write('<div>');
        FMATrackEmbed(musicFMAids[musicIter]);
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
    
  </div>
  <?php include 'includes/footer.php';?>
</body>
</html>