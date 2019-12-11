appRoute
	.config(function($httpProvider, $compileProvider, $analyticsProvider)
	{
		//
		$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ms-appx|ms-appdata|x-wmapp0|tel|file|filesystem|http|local|data|ftp|mailto|chrome-extension):/);
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ms-appx|ms-appdata|x-wmapp0|tel|file|filesystem|http|local|data|ftp|mailto|chrome-extension):/);

		//
		$httpProvider.defaults.headers.common = {};
		$httpProvider.defaults.headers.post = {};
		$httpProvider.defaults.headers.put = {};
		$httpProvider.defaults.headers.patch = {};
		$httpProvider.defaults.useXDomain = true;

		//
		$analyticsProvider.virtualPageviews(true);
		$analyticsProvider.withAutoBase(true);
	})
	.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider)
	{
		$urlRouterProvider.otherwise('/app/home');

		$stateProvider
			.state('app',
			{
				url: '/app',
				abstract: true,
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'./js/controllers/navigation.js',
							] 
						});
					}],
					deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'./js/models/network.js',
								'./js/models/system.js',
								'./js/models/navigation.js',
							]
						});
					}],
				},
				views: {
					'nav': {
						templateUrl: './templates/navigation.html',
						controller: 'NavigationCtr'
					},
				}
			})
			.state('app.home',
			{
				url: '/home',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'./js/controllers/home.js',
							] 
						});
					}],
				},
				views: {
				  'view@': {
						templateUrl: './templates/home_v3.html',
						controller: 'HomeCtr',
					}
				}
			})
			.state('app.projects',
			{
				url: '/projects',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'./js/controllers/projects.js',
							] 
						});
					}],
				},
				views: {
				  'view@': {
						templateUrl: './templates/projects.html',
						controller: 'ProjectsCtr'
					}
				}
			})
		;

		$ocLazyLoadProvider.config({
			debug: true,
			events: false,
		});
	})
;
