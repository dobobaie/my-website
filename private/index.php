<?php

/**
 * This demonstrates how to authenticate with LinkedIn and send api requests
 */

/*
 * First you need to make sure you've used composers auto load. You have is probably 
 * already done this before. You usually don't bother..
 */
require_once "./vendor/autoload.php";

$linkedIn = new Happyr\LinkedIn\LinkedIn(null, null);

if ($linkedIn->isAuthenticated()) {
    //we know that the user is authenticated now. Start query the API
    $user = $linkedIn->get('v1/people/~:('.
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
    ')');
    
    echo json_encode($user);

   // exit();
} elseif ($linkedIn->hasError()) {
    echo "User canceled the login.";
    exit();
}

//if not authenticated
$scope = 'r_fullprofile,r_emailaddress,w_share';
$url = $linkedIn->getLoginUrl(array('scope' => $scope));
echo "<a href='$url'>Login with LinkedIn</a>";