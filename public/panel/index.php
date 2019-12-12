<?php
	if ( !defined( 'FM_SESSION_ID')) {
    	define('FM_SESSION_ID', 'filemanager');
	}

	session_cache_limiter('');
    session_name(FM_SESSION_ID);
    @session_start();

	$env = file_get_contents('../../.env_config');
	$variables = explode(PHP_EOL, $env);
	$private_password = substr($variables[0], strlen('PRIVATE_PASSWORD='));
	
	if (!empty($_POST['logging']) && $_POST['logging'] === $private_password) {
		$_SESSION[FM_SESSION_ID]['logged'] = "admin";
	}

	if (isset($_GET['logout'])) {
		unset($_SESSION[FM_SESSION_ID]['logged']);
		header('Location: index.php');
		exit();
	}

	if (!empty($_SESSION[FM_SESSION_ID]['logged'])) {
		echo '<a href="tinyfilemanager.php">Tiny File Manager</a><br />';
		echo '<a href="linkedin.php">LinkedIn informations</a><br />';
		echo '<a href="index.php?logout">Log out</a><br />';
		exit();
	}
?>

<form action="" method="POST">
	<input type="text" name="logging" placeholder="Private password"><br />
	<input type="submit" value="Log In"><br />
</form>