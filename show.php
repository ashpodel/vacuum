<!DOCTYPE html>
<html>
<head>
  <?php include 'includes/header.php';?>
    <script src="urls.js"></script>
    <script>
      var GET = getUrlVars();
      if(GET["keywords"].length>0){        
          keywords = GET["keywords"].split('+');
        }  
      else {
        keywords = [];
      }
    </script>
    <script>
    $(document).ready(function(){
        $('body').backstretch(pictureUrls, {
            fade: 1500,
            duration: 1500
        });
        var playing = true;
        $('#pause').click(function(){
          if(playing){
            $('body').data('backstretch').pause();
            $(this).text('Play Slideshow');
            playing = false;
          } else {
            $('body').data('backstretch').resume();
            $(this).text('Pause Slideshow');
            playing = true;            
          }
        })

    })

    var pictureObjects = getFlickrPictureObjects(30,keywords);
    var pictureUrls = [];
    for(var iter=0; iter<pictureObjects.length; iter++){
      pictureUrls.push(getFlickrUrl(pictureObjects[iter],"b"));
    }; 
    </script>

</head>
<body>
  <script>
    var track_id = getFMAtrackid("");
  </script>
  <div class="transluscent">
    <div class="container">
      <a class="btn btn-small btn-inverse" href="index.php">Back</a>

          <?php  
          if (isset($_COOKIE['user_id'])){
            ?>
        <form id="savePictures" action="save.php" method="post" style="float:right;">
          <script>
          document.write('<input type="hidden" name="pictureObjects" value="'+JSON.stringify(pictureObjects).split("\"").join(" ")+'" />');
          document.write('<input type="hidden" name="track_id" value="'+track_id+'" />');
          </script>
        </form>
          <a class="btn btn-large btn-inverse" style="float:right" href='#' onclick='document.getElementById("savePictures").submit()'> Save to Account</a>

            <?php
          } else {
          ?>
            <span style="float:right; color:#ccc"><a href="signup.php">Sign Up</a> or <a href="login.php">Log in</a> to save your history.</span>
          <?php
            }
          ?>      
      
    </div>
  </div>
  <div class="transluscent bottom" style="">
    <div class="container">
        <script>
        FMATrackEmbed(track_id);
        </script> 
        <a id="pause" style="float:right" class="btn btn-large btn-info">Pause Slideshow</a>
        
    </div>  
  </div>
  <?php include 'includes/footer.php';?>
</body>
</html>

