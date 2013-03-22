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
      var pictureUrls = getPictureUrls("Flickr",keywords,30);
      // Put picture urls in POST.
      
      </script>

      <script>writeMusicPlayer("input does not matter yet")</script> 
      <a href="#" id="pause">Pause</a>
      <a href="#" id="play">Play</a>
      <a class="btn btn-small btn-inverse" href="index.php">Home</a>
      <a class="btn btn-small btn-inverse" href="save.php">Save to My Account</a>
      <a class="btn btn-small btn-inverse" href="signup.php">Sign Up</a>

    <!-- In this script I call the first function:-->
    
    <!-- In this script I call the second function:-->

    </body>
  </html>
