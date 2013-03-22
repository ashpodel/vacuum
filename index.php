<!DOCTYPE html>
<html>
  <head>
    <title>Vacuum</title>
    <link href='http://fonts.googleapis.com/css?family=Oxygen:400,300,700' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">      
  <script src="js/jquery.js"></script>
  <script src="js/jquery.backstretch.min.js"></script>
  <script>
    $(document).ready(function(){
        $('#splash').backstretch(['img/11.png','img/4.png','img/10.png'], {duration: 5000, fade: 2000});
      })
    </script>
  </head>
  <body>
    <?php include 'includes/nav.php';?>
    <div id="splash">
      <div class="bg">
      <div class="container">
        <div class="row">
          <div class="span4">
            <h1 style="font-family:'Aller Display'; color:#2fe3e5; font-size:7em; font-weight:normal; margin-bottom:50px; line-height:0; padding-top:9px;"><img src="img/logo.png"/></h1>
            
          </div>
          <div class="span8">
            <p style="color:#fdde74; font-size:2.5em; line-height:1.2; margin-bottom:10px">A shot of creative inspiration.</p>
            <div class="lead" style="color:white;">
              <p>Vacuum brings you beautiful slideshows crafted using photos &amp; music curated from the best sources on the web.</p>
          </div>

          </div>
          <div class="span12" style="text-align:center">
            <div style="color:white; margin-bottom:10px; font-size:2em; font-weight:bold; margin-bottom:20px; margin-top:150px;">Start Here</div>
            <form action="show.php" method="get">
              <input type="text" name="keywords" placeholder="Add some keywords"><br/>
              <!--<input class="btn btn-large btn-inverse" type="text" name="keywords" style="border-color:#000000;" value="keywords for the show" onblur="if (this.value == '') {this.value = 'keywords for the show';}"  onfocus="if (this.value == 'keywords for the show') {this.value = '';}">-->
              <input class="btn btn-large btn-info" type="submit" value="Get Inspiration Now"><br>
            </form>

          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="container">
      <div class="featurette">
          <h2 class="featurette-heading" id="about">About Vacuum. <span class="muted">How it works?</span></h2>
          <p><br><br></p>
          <p class="lead">Vacuum is intended to give you creative inspiration when you need it. Vacuum collects curated content from a selection of music and images sources.</p>
          <ul>
            <li class="lead">Click on "Get Inspiration" to choose a random set, or type in a few filters.</li> 
            <li class="lead">You get a beautiful slideshow with selected images and music.</li> 
            <li class="lead">If you sign up, you can access your history. Soon, you will be able to purchase these from our website.</li>
        </div>
    <hr class="featurette-divider" id="team">        
    <div class="featurette">
      <h2 class="featurette-heading">Team. <span class="muted">We power Vacuum.</span></h2>
      <p><br><br></p>
      <!-- Twocolumns-->
      <div class="row">
    <div class="span1"></div>
        <div class="span5">
          <p align="center"><img class="img-circle" src="img/manu.png" width="200"></p>
          <h2 align="center">Emmanuel Charon</h2>
          <p align="justify">After graduating from Ecole Polytechnique in France, Emmanuel Charon worked as a research intern at the LINCS/INRIA on congestion control in networks. He then moved to Stanford University for his Master of Science in Electrical Engineering. He now works at <a href="http://www.diffbot.com">Diffbot</a>, a start up specialized in web page classification.</p>
        </div><!-- /.span6 -->
        <div class="span5">
          <p align="center"><img class="img-circle" width="200" src="img/ashish.png"></p>
          <h2 align="center">Ashish Goel</h2>
          <p align="justify">Ashish is currently a student at the graduate product design program at Stanford University. He often finds himself deprived of creative inspiration, and hopes that Vacuum will provide some reprieve. He likes pushing pixels. </p>
        </div><!-- /.span6 -->
      </div><!-- /.row -->
    <div class="span1"></div>
    
    </div>
    <hr class="featurette-divider">
    <footer>
          <p class="pull-right"><a href="#">Back to top</a></p>
          <p>&copy; 2013 Vacuum Inc.</p>
        </footer>
  </div>
  <?php include 'includes/footer.php';?>
  </body>
</html>