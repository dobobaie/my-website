<?php
	if ( !defined( 'FM_SESSION_ID')) {
    	define('FM_SESSION_ID', 'filemanager');
	}

	session_cache_limiter('');
    session_name(FM_SESSION_ID);
    @session_start();

	if (empty($_SESSION[FM_SESSION_ID]['logged'])) {
		header('Location: index.php');
		exit();
	}
?>
<?php
	if (isset($_GET['exec_cmd_real_time'])) {
		function disable_ob() {
		    // Turn off output buffering
		    ini_set('output_buffering', 'off');
		    // Turn off PHP output compression
		    ini_set('zlib.output_compression', false);
		    // Implicitly flush the buffer(s)
		    ini_set('implicit_flush', true);
		    ob_implicit_flush(true);
		    // Clear, and turn off output buffering
		    while (ob_get_level() > 0) {
		        // Get the curent level
		        $level = ob_get_level();
		        // End the buffering
		        ob_end_clean();
		        // If the current level has not changed, abort
		        if (ob_get_level() == $level) break;
		    }
		    // Disable apache output buffering/compression
		    if (function_exists('apache_setenv')) {
		        apache_setenv('no-gzip', '1');
		        apache_setenv('dont-vary', '1');
		    }
		}

		$env = file_get_contents('../../.env_config');
		$variables = explode(PHP_EOL, $env);
		$path_gulp_file = substr($variables[3], strlen('PATH_GULP_FILE='));
		$command = 'cd ' . $path_gulp_file . ' && echo "CV generating is running" && gulp export && echo "CV generated" && cp export/CV.pdf public/assets/data/';
		
		header("Content-type: text/plain");
		disable_ob();
		system($command);
		exit();
	}

	if (isset($_POST['run'])) {
		echo '<iframe src="gcv.php?exec_cmd_real_time" width="400px" height="400px" frameborder="0"></iframe>';
	}
?>

<form method="post" action="">
	<input type="submit" name="run" value="Generate CV">
</form>