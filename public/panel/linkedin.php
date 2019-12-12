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
	$env = file_get_contents('../../.env_config');
	$variables = explode(PHP_EOL, $env);
	$linkedin_id = substr($variables[1], strlen('LINKEDIN_ID='));
	$linkedin_secret = substr($variables[1], strlen('LINKEDIN_SECRET='));

	if (empty($_POST['linkedin_id']) || empty($_POST['linkedin_secret'])) {
?>
	<form action="" method="POST">
		<input type="text" name="linkedin_id" placeholder="LinkedIn ID" value="<?php echo $linkedin_id; ?>"><br />
		<input type="text" name="linkedin_secret" placeholder="LinkedIn secret" value="<?php echo $linkedin_secret; ?>"><br />
		<input type="submit" value="Search"><br />
	</form>
<?php
	exit(); 
	}
?>

<?php
	require_once "./vendor/autoload.php";

	$linkedin_id = $_POST['linkedin_id'];
	$linkedin_secret = $_POST['linkedin_secret'];

	if (empty($linkedin_id) || empty($linkedin_secret)) {
		echo 'Les informations api linkedin sont introuvables.<br/>';
		exit();
	}

	$linkedIn = new Happyr\LinkedIn\LinkedIn($linkedin_id, $linkedin_secret);
	
	if ($linkedIn->hasError()) {
		echo 'User canceled the login.<br/>';
		exit();
	}
	
	if ($linkedIn->isAuthenticated())
	{
		$data = $linkedIn->get('v1/people/~:'.
			'('.
				'id,'.
				'first-name,'.
				'last-name,'.
				'headline,'.
				'picture-url,'.
				'industry,'.
				'summary,'.
				'specialties,'.
				'positions:('.
					'id,'.
					'title,'.
					'summary,'.
					'start-date,'.
					'end-date,'.
					'is-current,'.
					'company:('.
						'id,'.
						'name,'.
						'type,'.
						'size,'.
						'industry,'.
						'ticker)'.
				'),'.
				'educations:('.
					'id,'.
					'school-name,'.
					'field-of-study,'.
					'start-date,'.
					'end-date,'.
					'degree,'.
					'activities,'.
					'notes),'.
				'associations,'.
				'interests,'.
				'num-recommenders,'.
				'date-of-birth,'.
				'publications:('.
					'id,'.
					'title,'.
					'publisher:(name),'.
					'authors:(id,name),'.
					'date,'.
					'url,'.
					'summary),'.
				'patents:('.
					'id,'.
					'title,'.
					'summary,'.
					'number,'.
					'status:(id,name),'.
					'office:(name),'.
					'inventors:(id,name),'.
					'date,'.
					'url),'.
				'languages:('.
					'id,'.
					'language:(name),'.
					'proficiency:(level,name)),'.
				'skills:('.
					'id,'.
					'skill:(name)),'.
				'certifications:('.
					'id,'.
					'name,'.
					'authority:(name),'.
					'number,'.
					'start-date,'.
					'end-date),'.
				'courses:('.
					'id,'.
					'name,'.
					'number),'.
				'recommendations-received:('.
					'id,'.
					'recommendation-type,'.
					'recommendation-text,'.
					'recommender),'.
				'honors-awards,'.
				'three-current-positions,'.
				'three-past-positions,'.
				'volunteer:('.
					'volunteer-experiences:('.
						'id,'.
						'role,'.
						'organization:(name),'.
						'cause:(name)),'.
				')'.
			')'
		);
	
		// file_put_contents('../public/app/data.json', json_encode($data));
		// echo 'Le fichier data a été mis à jours.<br/>';
		// exit();

		echo json_encode($data);
	}

	//
	$scope = 'r_fullprofile,r_emailaddress,w_share';
	$url = $linkedIn->getLoginUrl(array('scope' => $scope));
	echo '<a href="'.$url.'">Sign in LinkedIn</a>';