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
	.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider)
	{
		// $locationProvider.html5Mode(!(window.location.href.indexOf('localhost') + 1));

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('app',
			{
				abstract: true,
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'/js/controllers/navigation.js',
							] 
						});
					}],
					deps: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'/js/models/network.js',
								'/js/models/system.js',
								'/js/models/navigation.js',
							]
						});
					}],
				},
				views: {
					'nav': {
						templateUrl: '/templates/navigation.html',
						controller: 'NavigationCtr'
					},
				}
			})
			.state('app.home',
			{
				url: '/',
				resolve: {
					loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'/js/controllers/home.js',
							] 
						});
					}],
				},
				views: {
				  'view@': {
						templateUrl: '/templates/home.html',
						controller: 'HomeCtr',
					}
				}
			})
		;

		$ocLazyLoadProvider.config({
			debug: false,
			events: false,
		});
	})
;
