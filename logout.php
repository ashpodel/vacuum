<?php include '/includes/header.php';?>
<body>
<?php include '/includes/nav.php';?>
<?php
	setcookie('user_id',$_GET['user_id'], time()-3600);
?>
<div class="container">
<a href="login.php">Login again</a>
</div>
</body>
<?php include '/includes/footer.php';?>