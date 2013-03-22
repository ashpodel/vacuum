<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Vacuum Show</title>
  <!-- Le styles -->
  <link href="css/bootstrap.css" rel="stylesheet">
  <script src="js/jquery.js"></script>
  <script src="js/jquery.backstretch.min.js"></script>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster. ASHISH: I moved them back to the top for readability - can move them back later. -->
    <!-- In this script I just copy what is in "urls.js", so I can use the functions that are defnied in it -->
    <script src="urls.js"></script>

    <!-- In this script I define two functions:-->
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
      <![endif]-->
    </head>

    <body>
      <!-- Retrieve the keywords from GET variables -->
      <script>
      var GET = getUrlVars();
      if("keywords" in GET){
        if(GET["keywords"]=="keywords for the show"){
            keywords = [];
        } else {
          keywords = GET["keywords"].split('+');
        }  
      } else {
        keywords = [];
      }
      </script>
    
      <script>
      $(document).ready(function(){
          $('body').backstretch(pictureUrls, {
              fade: 750,
              duration: 1000
          });
          $('#pause').click(function(){
            $('body').data('backstretch').pause();
          })
          $('#play').click(function(){
            $('body').data('backstretch').resume();
          })

      })

      var pictureObjects = getFlickrPictureObjects(30,keywords);
      var pictureUrls = [];
      for(var iter=0; iter<pictureObjects.length; iter++){
        pictureUrls.push(getFlickrUrl(pictureObjects[iter],"b"));
      }; 
      </script>

      <script>
      var track_id = writeMusicPlayer("input does not matter yet");
      </script> 
      <a href="#" id="pause">Pause</a>
      <a href="#" id="play">Play</a>
      <a class="btn btn-small btn-inverse" href="index.php">Home</a>



      
      <form id="savePictures" action="save.php" method="post">
        <script>
        document.write('<input type="hidden" name="pictureObjects" value="'+JSON.stringify(pictureObjects).split("\"").join(" ")+'" />');
        document.write('<input type="hidden" name="track_id" value="'+track_id+'" />');
        </script>
      </form>
      <a class="btn btn-small btn-inverse" href='#' onclick='document.getElementById("savePictures").submit()'> Save to my account.</a>


      <a class="btn btn-small btn-inverse" href="signup.php">Sign Up</a>

    <!-- In this script I call the first function:-->
    
    <!-- In this script I call the second function:-->

    </body>
  </html>
