<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Vacuum</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
    <![endif]-->

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
                                   <link rel="shortcut icon" href="../assets/ico/favicon.png">
  </head>

  <body>

<?php include 'includes/nav.php';?>


    <!-- Carousel
================================================== -->
    <div id="myCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="item active">
          <img src="img/10.png" alt="">
          <div class="container">
            <div class="carousel-caption">
              <h1>Vacuum</h1>
              <p class="lead">Lacking of imagination lately? Change your mind, explore the best content of the web with Vacuum.</p>
              <form action="show.php" method="get">
                <input class="btn btn-large btn-inverse" type="submit" value="Get inspiration now."><br>
                <input class="btn btn-large btn-inverse" type="text" name="keywords" style="border-color:#000000;" value="keywords for the show" onblur="if (this.value == '') {this.value = 'keywords for the show';}"  onfocus="if (this.value == 'keywords for the show') {this.value = '';}">
              </form>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="img/11.png" alt="">
          <div class="container">
            <div class="carousel-caption">
              <h1>Vaccum, travel here and now.</h1>
              <p class="lead">Vaccum gives you random audio and visual content, from the best sources of the web. Find inspiration in moments of drought, travel in moments of melancholy. </p>

              <form action="show.html" method="get">
                <input class="btn btn-large btn-inverse" type="submit" value="Start the show."><br>
                <input class="btn btn-large btn-inverse" type="text" style="border-color:#000000;" name="keywords" value="keywords for the show" onblur="if (this.value == '') {this.value = 'keywords for the show';}"  onfocus="if (this.value == 'keywords for the show') {this.value = '';}">
              </form>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
    </div><!-- /.carousel -->


  
  

      <!-- Marketing messaging and featurettes
  ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider" id="about">

        <div class="featurette">
          <h2 class="featurette-heading">About Vacuum. <span class="muted">How does it work?</span></h2>
          <p><br><br></p>
          <p class="lead">Vacuum is intended to give you inspiration when you need it. Vacuum provides you random content from a selection of music and images among the best rated of the web.</p>
          <ul>
            <li class="lead">Click on "Get inspiration" in the main page, then let yourself taken by the show.</li> 
            <li class="lead">When you feel it, click "create". You will have the choice to create drawing or text (coming soon: you can also record sound using your microphone, or video using your webcam).</li> 
            <li class="lead">If you log in, you can access your previous creations as well as the images and musics that Vacuum displayed to you. You can buy these from our website.</li>
        </div>

        <hr class="featurette-divider" id="team">

        <div class="featurette">
          <h2 class="featurette-heading">Team. <span class="muted">We power Vacuum.</span></h2>
          <p><br><br></p>
          <!-- Twocolumns-->
          <div class="row">
            <div class="span6">
              <p align="center"><img class="img-circle" src="img/brad-pitt-small.jpg"></p>
              <h2 align="center">Emmanuel Charon</h2>
              <p align="justify">After graduating from Ecole Polytechnique in France, Emmanuel Charon worked as a research intern at the LINCS/INRIA on congestion control in networks. He then moved to Stanford University for his Master of Science in Electrical Engineering. He now works at <a href="http://www.diffbot.com">Diffbot</a>, a start up specialized in web page classification.</p>
              <p><a class="btn" href="#">Emmanuel Charon's web page &raquo;</a></p>
            </div><!-- /.span6 -->
            <div class="span6">
              <p align="center"><img class="img-circle" src="img/indian-model.jpg"></p>
              <h2 align="center">Ashish Goel</h2>
              <p align="justify">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a class="btn" href="#">Ashish Goel's web page &raquo;</a></p>
            </div><!-- /.span6 -->
          </div><!-- /.row -->
        </div>

        <hr class="featurette-divider">
        <!-- /END THE FEATURETTES -->


      <!-- FOOTER -->
      <footer>
        <p class="pull-right"><a href="#">Back to top</a></p>
        <p>&copy; 2013 Vacuum Inc. 
          <!--
          &middot; 
          <a href="#">Privacy</a> &middot; 
          <a href="#">Terms</a>
          -->
        </p>
      </footer>

    </div><!-- / container marketing -->



    <!-- Le javascript
================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jQuery-dev.js"></script>
    <script src="js/bootstrap.js"></script>
    <!--<script src="js/bootstrap-min.js"></script>-->
    <script>
      !function ($) {
        $(function(){
          // carousel demo
          $('#myCarousel').carousel()
        })
      }(window.jQuery)
    </script>
  </body>
</html>
